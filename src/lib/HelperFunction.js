import axios from "axios";
import { MockComment } from "../data/CommentData"
import { useGlobalContext } from "../context/GlobalContext";

export const getAllComments = async () => {
    return MockComment;
}


export const addComment = async(text,userId, parentId=null, isParent=true, ) => {
    return {
            id: Math.floor(1000 + Math.random() * 9000), 
            comment: text,
            username:'Cena',  // the username of the user
            userId: userId, // id gotten from registering the user.
            isParent: isParent,
            ParentId: parentId,
            time: "2022-03-25",
    }
}

export const addCommentToApi = async(text, blogId, userId, token)=>{

   const response = await axios.post('http://localhost:4000/api/v1/comments',{
    reply: text,
    blog:blogId,
    user:userId
   },{
    headers:{
        Authorization: `Bearer ${token}`
    }
   })

   return response
}


