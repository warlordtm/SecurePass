import { useState } from "react"
import "../styles/PasswordForm.css"

type Props = {
  onSubmit: (password: string) => void
}

function MasterPasswordPrompt({ onSubmit }: Props) {
  const [password, setPassword] = useState("")
  const [hint, setHint] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) return alert("Please enter a password")

    if (!localStorage.getItem("card")) {
      // Saving hint only on first setup
      localStorage.setItem("hint", hint)
    }

    onSubmit(password)
  }

  const handleReset = () => {
    if (confirm("This will delete all saved data. Proceed?")) {
      localStorage.removeItem("card")
      localStorage.removeItem("hint")
      window.location.reload()
    }
  }

  return (
    <div className="master-password-prompt">
      <h2>Enter Master Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Master Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input"
        />
        {!localStorage.getItem("card") && (
          <input
            type="text"
            placeholder="Password Hint (optional)"
            value={hint}
            onChange={e => setHint(e.target.value)}
            className="input"
          />
        )}
        <button type="submit" className="submit-btn">Unlock</button>
      </form>

      {localStorage.getItem("hint") && (
        <p className="hint-text">
          🔑 Password Hint: <strong>{localStorage.getItem("hint")}</strong>
        </p>
      )}

      <button onClick={handleReset} className="submit-btn danger">
        Reset Everything
      </button>
    </div>
  )
}

export default MasterPasswordPrompt
