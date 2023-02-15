import { doc } from "firebase/firestore";
import { schedule as schedules } from "../assets/data/shcedule";
import { db } from "./firebase-config";
import { GetScheduleProp } from "./getSchedule";
import { SetScheduleProps } from "./setSchedule";

export const settingsForSetSchedule: SetScheduleProps = {
  db: db,
  collection: "schedule",
  documentID: "FufcLwLEKw67N6XnASpP",
  schedule: schedules
}

const sfDocRef = doc(settingsForSetSchedule.db, settingsForSetSchedule.collection, settingsForSetSchedule.documentID);

export const settingsForGetSchedule: GetScheduleProp = {
  db: db,
  sfDocRef: sfDocRef
}