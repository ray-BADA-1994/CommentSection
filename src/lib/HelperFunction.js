import { MockComment } from "../data/CommentData"

export const getAllComments = async () => {
    return MockComment;
}

export const addComment = async(text,userId, parentId=null, isParent=false, ) => {
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


