import React, { useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs'

const Slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)

    function createMarkup(c) {
        return { __html: c };
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
    let allb = await fs.promises.readdir('blogdata')
    allb = allb.map((item) => {
        return { params: { slug: item.split(".")[0] } }
    })
    return {
        paths: allb,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

export default Slug