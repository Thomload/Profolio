import styles from "./contact.module.css"

function Contact() {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email-from") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Nachricht erfolgreich gesendet!");
        e.currentTarget.reset();
      } else {
        console.log("Fehler beim Senden.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.contact}>
    <div className={styles.contactField}>
      <h1 className={styles.contactTitle}>Kontakt</h1>
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <label htmlFor="emailFrom">Deine E-Mail:</label>
        <input
          placeholder="yourMail@mail.com"
          type="email"
          name="email-from"
          id="emailFrom"
          required
        />
        <label htmlFor="message">Nachricht:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Was dürfen wir für dich tun?"
          required
        ></textarea>
        <button type="submit">Senden</button>
      </form>
    </div>
    </div>
  )
}

export default Contact