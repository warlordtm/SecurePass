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
  )
}

export default PasswordCard
