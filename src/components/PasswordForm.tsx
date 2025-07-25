import PasswordCard from "./PasswordCard"
import { useState, useEffect } from "react"
import "../styles/PasswordForm.css"
import CryptoJS from "crypto-js"
import MasterPasswordPrompt from "./MasterPasswordPrompt"
import Footer from "./Footer"

type formData = {
  website?: string
  email?: string
  username?: string
  password: string
}

function PasswordForm() {
  const [passwordcard, setPasswordcard] = useState<formData[]>([])
  const [formState, setFormState] = useState<formData>({
    website: "",
    email: "",
    username: "",
    password: "",
  })

  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [masterPassword, setMasterPassword] = useState<string | null>(null)
  const [failedAttempt, setFailedAttempt] = useState<boolean>(false)
  const [trials, setTrials] = useState<number>(1)
  const [timedOut, setTimedOut] = useState<boolean>(false)
  const [manyAttempts, setManyAttempts] = useState<boolean>(false)
  

  // Load from localStorager
  useEffect(() => {
    if (!masterPassword) return

    const saved = localStorage.getItem("card")
    if (saved) {
      try {
        const bytes = CryptoJS.AES.decrypt(saved, masterPassword)
        const decryptedStr = bytes.toString(CryptoJS.enc.Utf8)

        if (!decryptedStr) throw new Error("Decryption failed")

        const decrypted = JSON.parse(decryptedStr)
        setPasswordcard(decrypted)

      } catch (error) {
        setFailedAttempt(true)
        setTrials(prev => prev + 1)
        console.log(trials)

        if(trials >= 3)
        {
          setTimedOut(true)
          setManyAttempts(true)
          setTimeout(() => setTimedOut(false), 60000)
          setTrials(0)
          alert("Too many failed attempts. Locked for 60 seconds.")
        } else {
        alert(`Incorrect password. Attempt ${trials}/3`)
      }
        setMasterPassword(null)
      }
    }
  }, [masterPassword])

  // Save to localStorage
  useEffect(() => {
      if (!masterPassword) return
      if (passwordcard.length === 0) return 

      try{
        const encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(passwordcard),
        masterPassword
        ).toString()
        localStorage.setItem("card", encrypted)
      }catch (err) {
        console.error("Failed to save card", err)
      }
    }, [passwordcard, masterPassword])

  const addPasswordCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (editIndex !== null) {
      // Update mode
      const updated = [...passwordcard]
      updated[editIndex] = formState
      setPasswordcard(updated)
      setEditIndex(null)
    } else {
      // Add new
      setPasswordcard(prev => [...prev, formState])
    }

    // Reset form
    setFormState({ website: "", email: "", username: "", password: "" })

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const deleteCard = (id: number) => {
    setPasswordcard(prev => prev.filter((_, index) => index !== id))
  }

  const editCard = (index: number) => {
    const card = passwordcard[index]
    setFormState(card)
    setEditIndex(index)
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  const filteredCards = passwordcard.filter(card => {
    const values = Object.values(card).join(" ").toLowerCase()
    return values.includes(searchTerm.toLowerCase())
  })

  const getCard = filteredCards.map((card, index) => (
    <PasswordCard
      key={index}
      id={index}
      onDelete={deleteCard}
      onEdit={editCard}
      {...card}
    />
  ))

  if (!masterPassword) {
    return <MasterPasswordPrompt onSubmit={setMasterPassword} failed={failedAttempt} timeOut={timedOut} manyAttempts={manyAttempts}/>
  }

  return (
    <>
      <section className="password-form-section">
        <h2>{editIndex !== null ? "Edit Password" : "Add New Password"}</h2>

        {/*  Search Filter */}
        <input
          type="text"
          placeholder="🔍  Search passwords..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="input search-input"
        />

        <form onSubmit={addPasswordCard}>
          {/* Website */}
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            value={formState.website}
            onChange={e => setFormState({ ...formState, website: e.target.value })}
            className="input"
          />

          {/* Email */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={e => setFormState({ ...formState, email: e.target.value })}
            className="input"
          />

          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={e => setFormState({ ...formState, username: e.target.value })}
            className="input"
          />

          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={e => setFormState({ ...formState, password: e.target.value })}
            className="input"
            required
          />

          <div className="btn-div">
            <button type="submit" className="submit-btn">
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </section>

      <>{getCard}</>
      <Footer/>
    </>
  )
}

export default PasswordForm
