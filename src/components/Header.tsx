import "../styles/Header.css"
import DarkModeToggle from "./DarkModeToggle"

export default function Header()
{
  return(
    <header className="header">
      <div className="logo">🔐 SecurePass</div>
      {/* <button className="toggle-button">Toggle Button</button> */}
      <DarkModeToggle />
    </header>
  )
}