import { DocumentData, DocumentReference, Firestore, runTransaction } from 'firebase/firestore';
import { Day, ILessons, ISchedule } from '../../Types/schedule.interface';
import { DAYS_MAP } from '../../assets/constants';

export type GetScheduleProps = {
  db: Firestore,
  sfDocRef: DocumentReference<DocumentData>
}

export const getSchedule = ({ db, sfDocRef }: GetScheduleProps) =>
{
  return new Promise((resolve, rejected) =>
  {
    runTransaction(db, async (transaction) =>
    {
      const sfDoc = await transaction.get(sfDocRef);
      const sortedSchedule = sortingOfSchedule(sfDoc.data() as ISchedule)
      resolve(sortedSchedule)
    })
  })
}

const sortingOfSchedule = (scheduleData: ISchedule) =>
{
  let sortedSchedule: ISchedule = {}
  Object.keys(scheduleData).forEach((group) =>
  {
    const currentGroup: ILessons = scheduleData[`${group}`][0]
    const sortedDays = Object.keys(currentGroup).sort((a, b) =>
    {
      return DAYS_MAP[a as Day] - DAYS_MAP[b as Day]
    })

    let sortedGroup: ILessons = {}
    for (let index = 0; index < sortedDays.length; index++)
    {
      const currentDay: Day = sortedDays[index] as Day
      sortedGroup[`${currentDay}`] = currentGroup[`${currentDay}`]
    }
    sortedSchedule[`${group}`] = [sortedGroup]
  })

  return sortedSchedule
}