import { createContext } from "react";

export const AuthContext = createContext(null)

export const ThemeProviderContext = createContext({
    theme: "system",
    setTheme: () => null,
});