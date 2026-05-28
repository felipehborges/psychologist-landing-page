"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Render placeholder to prevent layout shift during hydration
  if (!mounted) return <div className="size-9" />

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={
        theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  )
}
