import { getItem } from "@/util/storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type MemoryType = {
  [x: string]: any;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  x: string;
  y: string;
  M: string;
};

type MemoryContextType = {
  memory: MemoryType;
  setMemory?: (memory: MemoryType) => void;
};

const MemoryContext = createContext<MemoryContextType>({
  memory: {
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "0",
    x: "0",
    y: "0",
    M: "0",
  },
});

const MemoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [memory, setMemory] = useState({
    a: "0",
    b: "0",
    c: "0",
    d: "0",
    e: "0",
    f: "0",
    x: "0",
    y: "0",
    M: "0",
  });

  useEffect(() => {
    const getMemory = async () => {
      const a = await getItem("a");
      const b = await getItem("b");
      const c = await getItem("c");
      const d = await getItem("d");
      const e = await getItem("e");
      const f = await getItem("f");
      const x = await getItem("x");
      const y = await getItem("y");
      const M = await getItem("M");
      setMemory({
        a: a ?? "0",
        b: b ?? "0",
        c: c ?? "0",
        d: d ?? "0",
        e: e ?? "0",
        f: f ?? "0",
        x: x ?? "0",
        y: y ?? "0",
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
