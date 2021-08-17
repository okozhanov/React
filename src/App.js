import logo from './logo.svg';
import './App.css';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div className="App">
            <div className={'posts_block'}>
                <p className={'header'}>posts</p>
                <Posts/>
            </div>
            <div className={'comments_block'}>
                <p className={'header'}>comments</p>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
