import "../styles/PasswordCard.css"

function PasswordCard()
{
  return(
    <section className="password-card-section">
      <div className="user-details">
        <p className="website">twitter.com</p>
        <p className="username-or-email">user@user.com</p>
        <p>........</p>
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