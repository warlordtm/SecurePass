import "../styles/PasswordCard.css"

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
}: Props) {
  return (
    <div className="password-card-section">
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
    </div>


<section className="password-card-section">
      <div className="user-details">
        <p className="website">{website || "No Website"}</p>
        <p className="username-or-email">{email || "N/A"}</p>
        <p className="username">{username || "N/A"}</p>
        <p>{password}</p>
      </div>
      <div className="user-icons">
        <div className="icons">
          <img src="/src/assets/notifications.svg" alt="icon" />
        </div>
        <div className="icons">
          <img src="/src/assets/search.svg" alt="icon" />
        </div>
        <div className="icons">
          <img src="src/assets/voice-search-icon.svg" alt="icon" />
        </div>
      </div>
    </section>
  )
}

export default PasswordCard
