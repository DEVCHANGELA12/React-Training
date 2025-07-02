import { createContext, useState, type ReactNode } from "react";

export interface ICount {
  count: number;
  increase: () => void | undefined;
  decrease: () => void | undefined;
  reset: () => void | undefined;
}
const defaultValue = {
  count: 0,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
};
export const CounterContext = createContext<ICount>(defaultValue);

interface CounterProviderProps {
  children: ReactNode;
}

export const ContextFile: React.FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increase, decrease, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
