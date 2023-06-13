/* eslint-disable no-unused-vars */
import React from 'react'
import InputForm from './InputForm'
import Comment from './Comment'
import { useEffect, useState } from 'react'
import { getAllComments, addComment as addCommentApi } from '../lib/HelperFunction'
import axios from 'axios'
import { useGlobalContext } from '../context/GlobalContext'

// eslint-disable-next-line react/prop-types
const CommentSection = () => {
  
  const {token} = useGlobalContext()
  
  const logginUserId = 1

  const [getComment, setGetComment] = useState([])

  console.log(getComment);

  // const parentComments = getComment.filter(comment => comment.ParentId===null)
  const parentComments = getComment.filter(comment => comment.isParent===true)

  // const getReplies = (id) => getComment.filter(comment => comment.ParentId === id)
  const getReplies = (id) => getComment.filter(comment => comment.comment === id)

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete')){
        let result = getComment.filter(comment => comment.id !== id)
        setGetComment(result)
    }
  }

  // const addNewComment = (text, userId,commentId=null) => {
  //     addCommentApi(text, userId, commentId).then(res => {
  //       setGetComment([res, ...getComment])
  //     });
  // }

  const addNewComment = (text, blogId, userId, token) => {
    addCommentApi(text, blogId, userId, token).then(res => {
      setGetComment([res, ...getComment])
    });
  }

//   function getReply(id){
//     let result = 
//   }

    useEffect(()=>{
    //   getAllComments().then(res => {
    //     setGetComment(res)
    // }) 
    
    const response = axios('http://localhost:4000/api/v1/comments', {
    headers:{
      Authorization: `Bearer ${token}`
    }
    }).then(res => setGetComment(res.data.data.comments))
    
    }, [])
  return (
    <section className='py-5 px-2 flex flex-col gap-5 min-w-[300px] w-[500px] min-h-[400px] bg-[#f1f2f3]'>
        <header className='flex flex-col gap-2 justify-center items-center' >
            <h1 className='text-2xl font-bold'>Comment Section</h1>
            <p className='text-sm italic font-medium'>Please leave a comment we would love to here from you on this matter</p>
        </header>

        <main className='space-y-5 w-[95%] mx-auto'>
          <InputForm addNewComment={addNewComment} logginUserId={logginUserId} action={"createComment"} commentId={null}/>
          {
            parentComments.length > 0 && (
               parentComments.map((parentComment) => (
                <Comment 
                key={parentComment.id}
                parentComment={parentComment}
                replies={getReplies(parentComment.id)}
                logginUserId={logginUserId}
                handleDelete={handleDelete}
                addNewComment={addNewComment}
                isParent={true}
                initialData={{getComment, setGetComment}}
                />

               ))
            )
          }
        </main>
    </section>
  )
}



// const commentLoader = async () => {
  

    
//   const response = await axios('http://localhost:4000/api/v1/comments', {
//     headers:{
//       Authorization: `Bearer  `
//     }
//   })
//   return 
// }

export default CommentSection