import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const params = useParams()
  const id = params.id

  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response=> response.json())
    .then(data=> setPost(data))
    .catch(error=>console.log(error))


  }, [id])

  return (
    <>
<h2>PostDetail</h2>
<h2>Post ID: {post.id}</h2>
<h2>Post Title: {post.title} </h2>
<h2>Body: {post.body} </h2>
<h2>User ID: {post.userId} </h2>


    </>
  )
}

export default PostDetail
