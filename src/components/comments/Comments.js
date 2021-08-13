import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getComments} from "../../services/comment.services";

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(() => {

        getComments().then(value => setComments([...value]))

    }, [])

  return (
    <div>
        {
            comments.map(thisComment => <Comment key={thisComment.id} thisComment={thisComment}/>)
        }
    </div>
  );
}