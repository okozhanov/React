import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.services";
import Comment from "../comment/Comment";
import CommentDetails from "../comment_details/CommentDetails";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([])
    let [commentId, setCommentId] = useState(null)

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    const getCommentId = (thisId) => {
        setCommentId(thisId)
    }

    return (
        <div className={'page'}>
            <div className={'comments'}>
                {comments.map(thisComment => <Comment key={thisComment.id} thisComment={thisComment} getCommentId={getCommentId}/>)}
            </div>

            {commentId&&<div className={'current_comment'}>
                {<CommentDetails commentDetails={comments[commentId-1]}/>}
            </div>}
        </div>
  );
}