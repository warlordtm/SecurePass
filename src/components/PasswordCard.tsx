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

  const [seen, setSeen] = useState(false)
  return (
    <section className="password-card-section">
      <div className="user-details">
        <p className="website">{website || "No Website"}</p>
        <p className="username-or-email">{email || "N/A"}</p>
        <p className="username">{username || "N/A"}</p>
        {!seen ? ".........." : <p>{password}</p>}
        <p>Note: {note || "None"}</p>
      </div>
      <div className="user-icons">
        <div className="icons" onClick={() => setSeen(prev => !prev)}>
          <img src={ seen ? "/src/assets/eye.svg" : "/src/assets/unmask.svg"} alt="eye-icon" />
        </div>
        <div className="icons">
          <img src="/src/assets/copy.svg" alt="copy-icon" />
        </div>
        <div className="icons" onClick={() => onDelete(id)}>
          <img src="src/assets/delete.svg" alt="icon" />
        </div>
        <div onClick={() => onEdit(id)} className="edit-btn icons">edit</div>
      </div>
    </section>
  )
}

export default PasswordCard


/* <div className="password-card-section">
      <div className="user-details">
        <h3>{website || "No Website"}</h3>
        <p>Email: {email || "N/A"}</p>
        <p>Username: {username || "N/A"}</p>
        <p>Password: {password}</p>
        <p>Note: {note || "None"}</p>
      </div>
      <div className="user-icons">
        <button onClick={() => onEdit(id)} className="edit-btn icons">Edit</button>
        <button onClick={() => onDelete(id)} className="delete-btn icons">Delete</button>
      </div>
    </div> */
