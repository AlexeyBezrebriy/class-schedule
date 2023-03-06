import { DocumentData, DocumentReference, Firestore, runTransaction } from 'firebase/firestore';

export type GetNumeratorProps = {
  db: Firestore,
  sfDocRef: DocumentReference<DocumentData>
}

export const getNumerator = ({ db, sfDocRef }: GetNumeratorProps) =>
{
  return new Promise((resolve, rejected) =>
  {
    runTransaction(db, async (transaction) =>
    {
      const sfDoc = await transaction.get(sfDocRef);
      const numerator = sfDoc.data()
      resolve(numerator)
    })
  })
}