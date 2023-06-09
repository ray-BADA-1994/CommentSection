/* eslint-disable react/prop-types */

import { useState } from "react"
import InputForm from "./InputForm"

                
  const Comment = (
    {
      replies,
      parentComment,
      logginUserId,
      handleDelete,
      addNewComment,
      isParent,
      initialData
    }
    ) => {

    const canDelete = parentComment.userId === logginUserId 

    const canEdit  = parentComment.userId === logginUserId

    const [isReplying, setIsReplying] =  useState(false)

    const [isEditing, setIsEditing] =  useState(false)
    

    const replyComment = (text, logginUserId, commentId) => {
      addNewComment(text, logginUserId, commentId)
      setIsReplying(!isReplying)
    }


    const editComment = (id, text) => {
       const result =  initialData.getComment.map((data) => {
        if(data.id === id){
          return {...data,comment:text}
        }
        return data
       });
       initialData.setGetComment(result)
       setIsEditing(!isEditing)
    }


  return (
    <div className="flex gap-2 items-start">

      {/*USER IMAGE */}
      <div className="w-[30px] h-[30px] rounded-full bg-slate-500">
        {/* <img src="" alt="" className="h-screen w-screen object-cover rounded-full"/> */}
      </div>

      {/*COMMENT BODY */}
      <div className="flex-1 space-y-2">

        {/* USERNAME AND TIME AND COMMENT */}
        { !isEditing && <div className="flex flex-col">
          {/* user name */}
          <div className="flex items-end gap-2">
          <h2 className="text-xs font-medium">{parentComment.username}</h2>
          {/* time */}
          <p className="text-[10px]" >
            <small>{parentComment.time}</small>
          </p>
          </div>
           {/* user comment */}
          <p className="text-xs">
            {parentComment.comment}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, enim! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, cum. */}
          </p>
          
        </div> }

        {isEditing && (
           <InputForm 
           buttonText="Update" 
           addNewComment={editComment} 
           logginUserId={logginUserId}
           commentId = {parentComment.id}
           action={"editComment"}
           initialValue={parentComment.comment}
           />
        )}

        {/* REPLY, EDIT, DELETE */}
        <div className="action-buttons flex gap-2 items-center justify-start">
         {isParent && <button className="text-[10px] border px-1 py-[2px] cursor-pointer" onClick={()=> setIsReplying(true)}>Reply</button>}
         { canEdit && <button className="text-[10px] border px-1 py-[2px] cursor-pointer" onClick={()=> setIsEditing(true)}>Edit</button>}
         { canDelete && <button className="text-[10px] border px-1 py-[2px] cursor-pointer" onClick={()=> handleDelete(parentComment.id)}>Delete</button>}
        </div> 


       {
         isReplying && (
          <InputForm 
          buttonText="Replying" 
          addNewComment={replyComment} 
          logginUserId={logginUserId}
          commentId = {parentComment.id}
          action={"replyComment"}

          />
         )
       }

        {
              replies.length > 0 && (
                <div className="replies pl-4 mt-2">
                 {replies.map(reply => (
                  <Comment 
                  replies={[]} 
                  parentComment={reply} 
                  key={reply.id} 
                  logginUserId={logginUserId}
                  isParent={false}
                  handleDelete={handleDelete}
                  addNewComment={addNewComment}
                  />
                ))}
                </div>
              )
        }
      
      </div>

    </div>
  )
}

export default Comment