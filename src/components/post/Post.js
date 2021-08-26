import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";
import './Post.css'

export default function Post({thisPost, url}) {
    return (
        <div className={'post'}>
            <span className={'post_button'}><Link to={{pathname: `${url}/${thisPost.id}`, state: thisPost}}>details</Link></span>
            <span className={'post_title'}>{thisPost.title}</span>
        </div>
    );
}