/* eslint-disable react/prop-types */
import { useState } from "react"

const InputForm = ({addNewComment, logginUserId, buttonText="comment", action, commentId, initialValue = ""}) => {

  const [text, setText] = useState(initialValue)

  console.log(text);

  const handleSubmit = (e) => {
    e.preventDefault()
      action === 'createComment' ?  
        addNewComment(text, logginUserId) :  
           action === 'replyComment' ?  
              addNewComment(text, logginUserId, commentId) : 
                addNewComment(commentId, text)
    // addNewComment(text, logginUserId)
    setText('');
  }

  return (
    <form className='flex flex-col gap-2 ' onSubmit={(e)=> handleSubmit(e)}>
       <textarea 
       placeholder='Leave a comment'
       className='border border-[#535a5f] py-1 px-2 bg-[#f1f2f3] text-[#181b19] text-sm font-normal placeholder:text-slate-400 placeholder:text-xs placeholder:italic min-h-[100px]'
       value={text}
       onChange={(e)=> setText(e.target.value)}
       >
       </textarea>
       <button className='px-3 py-1 font-semibold bg-[#849493] w-fit rounded-sm'>{buttonText}</button>
    </form>
  )
}

export default InputForm