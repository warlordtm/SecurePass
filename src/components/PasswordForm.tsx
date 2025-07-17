import "../styles/PasswordForm.css"

function PasswordForm()
{
  return(
    <section className="password-form-section">
      <h2>Add New Password</h2>
      <form>
        <div className="label-divs">
          <label htmlFor="website">Website</label>
          <input name="website" placeholder="website" className="input"></input>

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
  )
}

export default PasswordForm