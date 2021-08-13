import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/comments.services";
import Comment from "../comment/Comment";

export default function Comments({postId}) {

    let [comments, setComments] = useState([])

    useEffect(() => {
        getCommentsOfPost(postId).then(value => setComments([...value]))
    }, [])

    return (
    <div className='comments'>
        {
            comments.map(thisComment => <Comment key={thisComment.id} thisComment={thisComment}/>)
        }
    </div>
  );
}