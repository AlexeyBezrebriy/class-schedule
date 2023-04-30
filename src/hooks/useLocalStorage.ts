
import { useState, useEffect } from 'react';

export const useLocalStorage = (initialValue: string[], key: string):
  [string[], React.Dispatch<React.SetStateAction<string[]>>] =>
{
  const getValue = () =>
  {
    const savedValue = localStorage.getItem(key);

    if (savedValue)
    {
      return JSON.parse(savedValue);
    }
    return initialValue;
  }

  const [value, setValue] = useState(getValue());

  useEffect(() =>
  {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value])

  return [value, setValue];
} 