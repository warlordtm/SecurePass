import { useState } from "react";
import "../styles/PasswordCard.css"

type PasswordCardProps = {
  onDelete: (id: number) => void
  website?: string;
  email?: string;
  id : number;
  username?: string;
  password: string;
  note?: string;
}

function PasswordCard({ onDelete, website, email, id, username, password, note}: PasswordCardProps)
{
  const [showPassword, setShowPassword] = useState(false);

  return(
    <section className="password-card-section">
      <div className="user-details">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        <p className="username-or-email">{email}</p>
        <p className="password">{showPassword ? password : "••••••••••••••"}</p>
        <p className="note">{note}</p>
      </div>
      <div className="user-icons">
        <div className="icons">
          <img onClick={() => setShowPassword(!showPassword)} src="/src/assets/eye.svg" />
        </div>
        <div className="icons">
          <img src="/src/assets/copy.svg" onClick={() => navigator.clipboard.writeText(password)} />
        </div>
        <div className="icons" onClick={() => onDelete(id)}>
          <img src="src/assets/delete.svg" alt="icon" />
        </div>
      </div>
    </section>
  )
}

export default PasswordCard