import PasswordCard from "./PasswordCard"
import { useState } from "react"
import "../styles/PasswordForm.css"

type formData= {
  website?: string
  email?: string
  username?: string
  password: string
  note?: string
}

function PasswordForm()
{

  const [passwordcard, setPasswordcard] = useState<formData[]>([])

  const addPasswordCard = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDetails = Object.fromEntries(formData.entries()) as formData;
    setPasswordcard(prev => [...prev, formDetails])
    console.log(passwordcard)
  }
  return(
    <>
      <section className="password-form-section">
      <h2>Add New Password</h2>
      <form onSubmit={addPasswordCard}>
        <div className="label-divs">
          <label htmlFor="website">Website</label>
          <input type="text" defaultValue={"twitter.com"} name="website" placeholder="twitter.com" className="input"></input>

          <label htmlFor="email">Email</label>
          <input defaultValue={"twittertwittertwitter@gmail.com"} name="email" placeholder="john@joe.com" type="email" className="input"></input>

          <label htmlFor="username">Username</label>
          <input defaultValue={"twitter"} name="username" placeholder="johndoe" className="input" type="text"></input>
        </div>

          <label htmlFor="password">Password</label>
          <input type="password" defaultValue={"twitter.com"} name="password" placeholder="Yk9w/~*/fimwq3" className="input"/>

          <label htmlFor="note" className="text-area-label">Notes</label>
          <textarea defaultValue={"twitter.com notes"} name="note" id="note" placeholder="type your notes here..." className="text-area"></textarea>
          <div className="btn-div">
            <button type="submit" className="submit-btn">Add</button>
          </div>
        </form>
      </section>
        {passwordcard.map((card) => (
          <PasswordCard 
            key={card.website} 
            formData={card} 
          />
        ))}
    </>
    
  )
}

export default PasswordForm