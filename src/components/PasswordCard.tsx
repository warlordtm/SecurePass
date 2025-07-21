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
    <div className="password-card">
      <h3>{website || "No Website"}</h3>
      <p><strong>Email:</strong> {email || "N/A"}</p>
      <p><strong>Username:</strong> {username || "N/A"}</p>
      <p><strong>Password:</strong> {password}</p>
      <p><strong>Note:</strong> {note || "None"}</p>
      <button onClick={() => onEdit(id)} className="edit-btn">Edit</button>
      <button onClick={() => onDelete(id)} className="delete-btn">Delete</button>
    </div>
  )
}

export default PasswordCard
