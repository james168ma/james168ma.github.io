import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const subpagesDirectory = 'subpages'
const postsDirectory = 'posts'
const projectsDirectory = 'projects'

export function getSortedData(type) {
  let directory
  if(type === "subpages") directory = subpagesDirectory
  if(type === "posts") directory = postsDirectory
  if(type === "projects") directory = projectsDirectory

  // Get file names under directory
  const fileNames = fs.readdirSync(directory)

  const allData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace('.md', '')
    const markdownWithMetaData = fs.readFileSync(path.join(directory, id + ".md"))

    const parsedMarkdown = matter(markdownWithMetaData)

    // Combine the data with the id
    return {
        id,
        ...parsedMarkdown.data
    }
  })
  // Sort posts by date
  let sorted
  if(type === "posts") {
    sorted = allData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } else {
    sorted = allData.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1
      } else {
        return -1
      }
    })
  }

  return sorted.map(page => page.id)
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
        id,
        ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
