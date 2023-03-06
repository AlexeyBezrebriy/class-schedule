import { Firestore, doc } from "firebase/firestore";
import { schedule as schedules } from "../assets/data/shcedule";
import { db } from "./firebase-config";
import { GetScheduleProps } from "./schedule/getSchedule";
import { SetScheduleProps } from "./schedule/setSchedule";
import { GetNumeratorProps } from "./numerator/getNumerator";

export const settingsForSetSchedule: SetScheduleProps = {
  db: db,
  collection: "schedule",
  documentID: "FufcLwLEKw67N6XnASpP",
  schedule: schedules
}

const sfDocRef = doc(settingsForSetSchedule.db, settingsForSetSchedule.collection, settingsForSetSchedule.documentID);

export const settingsForGetSchedule: GetScheduleProps = {
  db: db,
  sfDocRef: sfDocRef
}

const sfDocRefForNumerator = doc(db, "schedule", "rXHG7zG8sZhRlPbNr0AB")

export const settingsForGetNumerator: GetNumeratorProps = {
  db: db,
  sfDocRef: sfDocRefForNumerator,
}

export const settingsOfDbForSetNumerator: {
  db: Firestore
  collection: string
  documentID: string
} = {
  db: db,
  collection: "schedule",
  documentID: "rXHG7zG8sZhRlPbNr0AB",
} 