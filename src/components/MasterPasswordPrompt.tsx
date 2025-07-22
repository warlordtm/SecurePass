import { useState } from "react"
import "../styles/MasterPasswordPrompt.css"

type Props = {
  onSubmit: (password: string) => void
}

function MasterPasswordPrompt({ onSubmit }: Props) {
  const [password, setPassword] = useState("")
  //const [confirmPassword, setConfirmPassword] = useState("")
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
      {!localStorage.getItem("card") ? <h2>CREATE MASTER PASSWORD</h2> : <h2>ENTER MASTER PASSWORD</h2>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Master Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input"
        />
        {!localStorage.getItem("card") && (
          <>
            {/* <label htmlFor="password">Confirm password</label>
            <input
              name="password"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="input"
            /> */}
            <input
              type="text"
              placeholder="Password Hint (optional)"
              value={hint}
              onChange={e => setHint(e.target.value)}
              className="input hint"
            />
          </>
        )}
        {!localStorage.getItem("card") ? <button type="submit" className="submit-btn">LOCK</button> : <button type="submit" className="submit-btn">UNLOCK</button>}
      </form>

      {localStorage.getItem("hint") && (
        <p className="hint-text">
          🔑 Password Hint: {localStorage.getItem("hint")}
        </p>
      )}

      {localStorage.getItem("card") && <button onClick={handleReset} className="submit-btn danger">
       - reset password -
      </button>}
    </div>
  )
}

export default MasterPasswordPrompt
