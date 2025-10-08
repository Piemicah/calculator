import { getItem } from "@/util/storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type MemoryType = {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  X: string;
  Y: string;
  M: string;
};

type MemoryContextType = {
  memory: MemoryType;
  setMemory?: (memory: MemoryType) => void;
};

const MemoryContext = createContext<MemoryContextType>({
  memory: {
    A: "0",
    B: "0",
    C: "0",
    D: "0",
    E: "0",
    F: "0",
    X: "0",
    Y: "0",
    M: "0",
  },
});

const MemoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [memory, setMemory] = useState({
    A: "0",
    B: "0",
    C: "0",
    D: "0",
    E: "0",
    F: "0",
    X: "0",
    Y: "0",
    M: "0",
  });

  useEffect(() => {
    const getMemory = async () => {
      const a = await getItem("A");
      const b = await getItem("B");
      const c = await getItem("C");
      const d = await getItem("D");
      const e = await getItem("E");
      const f = await getItem("F");
      const x = await getItem("X");
      const y = await getItem("Y");
      const M = await getItem("M");
      setMemory({
        A: a ?? "0",
        B: b ?? "0",
        C: c ?? "0",
        D: d ?? "0",
        E: e ?? "0",
        F: f ?? "0",
        X: x ?? "0",
        Y: y ?? "0",
        M: M ?? "0",
      });
    };

    getMemory();
  }, []);
  return (
    <MemoryContext.Provider value={{ memory, setMemory }}>
      {children}
    </MemoryContext.Provider>
  );
};

export const useMemory = () => useContext(MemoryContext);

export { MemoryContext, MemoryProvider };
