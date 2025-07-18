import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )
  const [toggle, setToggle] = useState(false)

  function toggleDarkMode() {
    setToggle(prev => !prev)
    const html = document.documentElement
    html.classList.toggle('dark')
    setDark(!dark)
  }

  function toggleLightMode() {
    setToggle(prev => !prev)
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
   
    <div className="darkmode">
      <div className="da" onClick={toggleLightMode}>{ !dark && '🌙'}</div>
      <div className="li" onClick={toggleDarkMode}>{dark && '☀️'}</div>
      {toggle && <div className="toggle1"></div>}
      {!toggle && <div className="toggle2"></div>}
    </div>
  )
}