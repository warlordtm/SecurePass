import { useState } from "react"
import "../styles/MasterPasswordPrompt.css"

type Props = {
  failed: boolean,
  timeOut: boolean,
  manyAttempts: boolean,
  onSubmit: (password: string) => void
}

function MasterPasswordPrompt({ onSubmit, failed, timeOut, manyAttempts }: Props) {
  const [password, setPassword] = useState<string>("")
  const [hint, setHint] = useState<string>("")
  const [validPassword, setValidPassword] = useState<boolean>(true)
  const [passwordLength, setPasswordLength] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) return setValidPassword(false)

    if (!localStorage.getItem("card")) {
      localStorage.setItem("hint", hint)
    }
    
    if(password.length < 7) return setPasswordLength(true)

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
    <>
      <div className="master-password-prompt">
        {!localStorage.getItem("card") ? <h2>CREATE MASTER PASSWORD</h2> : <h2>ENTER MASTER PASSWORD</h2>}

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input"
          />

          <div className="wrong-password-div">
            {validPassword && <p className="wrong-password">password field cannot be empty!</p>}
            {passwordLength && <p className="wrong-password">minimum password length is 7</p>}
          </div>

          {!localStorage.getItem("card") && (
            <>
              <input
                type="text"
                placeholder="Password Hint (optional)"
                value={hint}
                onChange={e => setHint(e.target.value)}
                className="input hint"
              />
            </>
          )}

          {!localStorage.getItem("card") ? <button type="submit" className="submit-btns">LOCK</button> : <button type="submit" disabled={timeOut === true} className="submit-btns">UNLOCK</button>}
        </form>


        {localStorage.getItem("hint") && (
          <p className="hint-text">
            🔑 Password Hint: {localStorage.getItem("hint")}
          </p>
        )}

        {localStorage.getItem("card") && <button onClick={handleReset} className="submit-btn danger">
        - &nbsp; reset password &nbsp; -
        </button>}
      </div>
    </>
  )
}

export default MasterPasswordPrompt
