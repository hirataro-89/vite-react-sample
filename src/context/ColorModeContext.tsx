import { createContext, useContext, useState, ReactNode, FC } from "react";

type Mode = "light" | "dark";

type ColorModeContextProps = {
  mode: Mode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const useColorMode = (): ColorModeContextProps => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

interface ProviderProps {
  children: ReactNode;
}

export const ColorModeProvider: FC<ProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <div className={mode}>
        {children}
      </div>
    </ColorModeContext.Provider>
  );
};
