import "../styles/PasswordCard.css"

type PasswordCardProps = {
  formData: {
    website?: string;
    email?: string;
    username?: string;
    password: string;
    note?: string;
  }
}

function PasswordCard({formData}: PasswordCardProps)
{
  return(
    <section className="password-card-section">
      <div className="user-details">
        <p className="website">{formData.website}</p>
        <p className="username-or-email">{formData.email}</p>
        <p>{formData.password}</p>
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