import { useState } from "react";
import "../styles/PasswordCard.css";

type PasswordCardProps = {
  onDelete: (id: number) => void;
  website?: string;
  email?: string;
  id: number;
  username?: string;
  password: string;
  note?: string;
};

function PasswordCard({
  onDelete,
  website,
  email,
  id,
  username,
  password,
  note,
}: PasswordCardProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="password-card-section">
      <div className="user-details">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        <p className="username-or-email">{email}</p>
        <p className="password">
          {showPassword ? password : "••••••••••••••"}
        </p>
        <p className="note">{note}</p>
      </div>

      <div className="user-icons">
        {/* Show/Hide password icon */}
        <div className="icons" onClick={() => setShowPassword((prev) => !prev)}>
          <img
            src={showPassword ? "/src/assets/eye.svg" : "/src/assets/unmask.svg"}
            alt="Toggle visibility"
          />
        </div>

        {/* Copy icon with tooltip */}
        <div className="icons copy-container" onClick={handleCopy}>
          <img src="/src/assets/copy.svg" alt="Copy password" />
          {isCopied && <div className="tooltip">Copied!</div>}
        </div>

        {/* Delete icon */}
        <div className="icons" onClick={() => onDelete(id)}>
          <img src="/src/assets/delete.svg" alt="Delete entry" />
        </div>
      </div>
    </section>
  );
}

export default PasswordCard;
