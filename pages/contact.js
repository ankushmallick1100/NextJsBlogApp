import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, phone, desc }
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then((data) => {
        alert("Thanks for contacting us.")
        setName('')
        setEmail('')
        setPhone('')
        setDesc('')
      })
      .catch((error) => {
        console.log("Error : ", error)
      })
  }

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value)
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    else if (e.target.name == "phone") {
      setPhone(e.target.value)
    }
    else if (e.target.name == "desc") {
      setDesc(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>Enter your name</label>
          <input className={styles.input} type="text" id="name" name="name" value={name} onChange={handleChange} aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>Email address</label>
          <input className={styles.input} type="email" id="email" name="email" value={email} onChange={handleChange} aria-describedby="emailHelp" required />
          <div id="emailHelp" className={styles.formText}>We'll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formLabel}>Phone</label>
          <input className={styles.input} type="phone" id="phone" name="phone" value={phone} onChange={handleChange} required />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formLabel} htmlFor="desc">Elaborate your concern</label>
          <textarea className={styles.input} id="desc" name="desc" value={desc} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact