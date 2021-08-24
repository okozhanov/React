import {useEffect, useState} from "react";
import {getComments} from "../../services/comments.services";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    return (
    <div className={'comments'}>
        {comments.map(thisComment => <Comment key={thisComment.id} thisComment={thisComment}/>)}
    </div>
  );
}