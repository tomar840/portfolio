import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface ThemeToggleProps {
  onThemeChange?: (isDark: boolean) => void;
}

const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark) || stored === null;
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    onThemeChange?.(shouldBeDark);
  }, [onThemeChange]);

  const toggle = useCallback(() => {
    const newValue = !isDark;
    setIsDark(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
    onThemeChange?.(newValue);
  }, [isDark, onThemeChange]);

  return (
    <motion.button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:border-primary transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-800" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
