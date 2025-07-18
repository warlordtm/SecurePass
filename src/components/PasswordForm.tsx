import PasswordCard from "./PasswordCard"
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

  const addPasswordCard = (formData) => {
    const website = formData.get("website")
    const email = formData.get("email")
    const username = formData.get("username")
    const password = formData.get("password")
    const note = formData.get("note")

    alert(" Successfully submitted!")
  }
  return(
    <>
      <section className="password-form-section">
      <h2>Add New Password</h2>
      <form action={addPasswordCard}>
        <div className="label-divs">
          <label htmlFor="website">Website</label>
          <input name="website" placeholder="twitter.com" className="input"></input>

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="john@joe.com" type="email" className="input"></input>

          <label htmlFor="username">Username</label>
          <input name="username" placeholder="johndoe" className="input"></input>
        </div>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Yk9w/~*/fimwq3" className="input"/>

          <label htmlFor="note" className="text-area-label">Notes</label>
          <textarea name="note" id="note" placeholder="type your notes here..." className="text-area"></textarea>
          <div className="btn-div">
            <button type="submit" className="submit-btn">Add</button>
          </div>
        </form>
      </section>
      <PasswordCard/>
    </>
    
  )
}

export default PasswordForm