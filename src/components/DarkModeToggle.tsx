import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  function toggleDarkMode() {
    const html = document.documentElement
    html.classList.toggle('dark')
    setDark(!dark)
  }

  useEffect(() => {
    // Load user preference from localStorage
    const userPref = localStorage.getItem('theme')
    if (userPref === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  useEffect(() => {
    // Save user preference
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={toggleDarkMode}
      className="mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}