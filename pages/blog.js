import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return <div key={blogItem.slug}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
            </Link>
            <p className={styles.blogItemP}>{blogItem.content.substr(0, 140)}...</p>
          </div>
        })}
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let myFile
  let allBlogs = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: {allBlogs},
  }
}

export default Blog