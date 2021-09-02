import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../services/posts.services";
import {fetchPosts} from "../../Redux/actions/actions";

export default function Posts({userId}) {

    let {posts} = useSelector(state => state.reducerPosts)

    let dispatch = useDispatch()

    useEffect(() => {
        getPosts().then(value => dispatch(fetchPosts(value)))
    }, [dispatch])

  return (
    <div>
        {posts.map(thisPost => <div key={thisPost.id}>{thisPost.id}. {thisPost.title}</div>)}
    </div>
  );
}