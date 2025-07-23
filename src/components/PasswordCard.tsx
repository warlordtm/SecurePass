import "../styles/PasswordCard.css"
import { useState } from "react"

type Props = {
  id: number
  website?: string
  email?: string
  username?: string
  password: string
  note?: string
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}

function PasswordCard({
  id,
  website,
  email,
  username,
  password,
  note,
  onDelete,
  onEdit
}: Props) 
{
  const [isCopied, setIsCopied] = useState(false);
  const [seen, setSeen] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <section className="password-card-section">
      <div className="user-details">
        <p className="website">{website || "No Website"}</p>
        <p className="username-or-email">{email || "N/A"}</p>
        <p className="username">{username || "N/A"}</p>
        {!seen ? "••••••••••••••" : <p>{password}</p>}
        <p>Note: {note || "None"}</p>
      </div>
      <div className="user-icons">
        <div className="icons" onClick={() => setSeen(prev => !prev)}>
          <img src={ seen ? "/assets/eye.svg" : "/assets/unmask.svg"} alt="eye-icon" />
        </div>
        <div className="icons copy-container" onClick={handleCopy}>
          <img src="/assets/copy.svg" alt="copy-icon" />
	  {isCopied && <div className="tooltip">Copied!</div>}
        </div>
        <div className="icons" onClick={() => onDelete(id)}>
          <img src="/assets/delete.svg" alt="icon" />
        </div>
        <div onClick={() => onEdit(id)} className="icons">
	  <img src="/assets/edit.svg" alt="edit" />
	</div>
      </div>
    </section>
  )
}

export default PasswordCard
