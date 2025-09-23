import { getItem } from "@/util/storage";
import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme?: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("default");

  useEffect(() => {
    const getTheme = async () => {
      const value = await getItem("theme");
      setTheme(value);
    };

    getTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider };
