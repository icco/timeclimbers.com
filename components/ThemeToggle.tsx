"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  const onChange = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <>
      <label className="swap swap-rotate align-text-top">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={isDark}
          onChange={onChange}
          className="theme-controller"
          value={resolvedTheme}
        />

        <SunIcon className="swap-off h-6 w-6" />

        <MoonIcon className="swap-on h-6 w-6" />
      </label>
    </>
  )
}

export default ThemeToggle
