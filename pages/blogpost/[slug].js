import React, { useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)

    function createMarkup(c) {
        return {__html: c};
      }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const { slug } = context.params

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")

    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

export default Slug