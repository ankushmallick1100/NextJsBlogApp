import React, { useState } from 'react'
import styles from '../styles/Blog.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link'
import Head from 'next/head'
import * as fs from 'fs'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  const [count, setCount] = useState(2)

  const fetchData = async () => {
    const d = await fetch(`http://localhost:3000/api/blogs?count=${count+2}`)
    setCount(count+2)
    let data = await d.json()
    setBlogs(data)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
      </Head>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogItem) => {
            return <div key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
              </Link>
              <p className={styles.authorName}>Author: {blogItem.author}</p>
              <p className={styles.blogItemP}>{blogItem.metadesc.substr(0, 140)}...</p>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <button className={styles.btn}>Read More</button>
              </Link>
            </div>
          })}
        </InfiniteScroll>
      </main>
    </div >
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let allCount = data.length
  let myFile
  let allBlogs = []
  for (let i = 0; i < 2; i++) {
    const item = data[i]
    myFile = await fs.promises.readFile(('blogdata/' + item))
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: { allBlogs, allCount },
  }
}

export default Blog