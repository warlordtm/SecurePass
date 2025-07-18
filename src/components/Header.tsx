import "../styles/Header.css"
import DarkModeToggle from "./DarkModeToggle"

export default function Header()
{
  return(
    <header className="header">
      <div className="logo">🔐 SecurePass</div>
      <DarkModeToggle />
    </header>
  )
}