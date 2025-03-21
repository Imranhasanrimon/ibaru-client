import { ThemeProviderContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

// Custom hook to use the theme
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
