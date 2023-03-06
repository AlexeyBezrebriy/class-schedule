import { createContext } from "react";

type NumeratorContextType = {
  numeratorRef: React.MutableRefObject<boolean>;
}

export const NumeratorContext = createContext<NumeratorContextType>({
  numeratorRef: { current: false }
})

