import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Sitepoint Blog</h1>
      <h2>Introduction</h2>
      <p>Sitepoint Blog is a programming-oriented blog. We publish multiple articles every day from several authors, all curated and edited to ensure excellent content. We cover a range of subjects and languages for programming, with content for both beginners and very advanced readers. If you want to develop programming skills, it’s a must-have on your daily reading list. So, before you plan to start your own programming blog, it is best to be a regular reader of Sitepoint Blog!</p>

      <h2>Services Offered</h2>
      <p>We, the Sitepoint Blog,provides best blog service that lets you create and maintain a blog. It hosts your blog, which means it gives your blog its own web address, or URL. We are also stores your blog's data. Each blog service has different features, but they all let you share your opinions, interests, photos, and more.</p>
      <p>We offer the following services:</p>
      <ul>
        <li>Post your blogs easily</li>
        <li>Generate your other blog post URL and use it anywhere</li>
        <li>Easily view other blog posts</li>
        <li>Easily contact to us</li>
      </ul>

      <h2>Contact us</h2>
      <p>You can contact us through the contact page. In contact page, give your name, email address, phone number, and the message that you will sent to us. We will keep touch with you with your given email address.</p>
    </div>
  )
}

export default About