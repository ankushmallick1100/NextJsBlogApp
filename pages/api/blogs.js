// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata")
  let myFile
  let allBlogs = []

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    // console.log(item)
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs)
}