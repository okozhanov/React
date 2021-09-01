import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../services/posts.services";
import {fetchPosts} from "../../Redux/actions/actions";

export default function Posts() {

    // let state = useSelector(state => {
    //     let {reducedPosts} = state
    //     return reducedPosts
    // })
    // let {posts} = state
    //
    // console.log(state);
    //
    // let dispatch = useDispatch()
    //
    // useEffect(() => {
    //     getPosts().then(value => dispatch(fetchPosts(value)))
    // }, [dispatch])

  return (
    <div>
        {/*{posts.map(thisPost => <div>{thisPost.title}</div>)}*/}
    </div>
  );
}