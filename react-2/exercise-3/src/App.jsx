import usePost from "./hook/usePost";
import "./App.css";

function App() {
  const { get, remove } = usePost();
  const data = get();
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection getPosts={data} getRemove={remove}/>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = ({ getPosts, getRemove }) => {

return(
  <div className="feed">
    {getPosts.map((post) => {
      return(
        <Post 
        key={post.id}
        id={post.id}
        author={post.author}
        time={post.time}
        content={post.content}
        avatar={post.avatar}
        image={post.image}
        getRemove={getRemove} 
        />
      )
    })}
  </div>
)
};

const Post = (props) => {
const {id, author, time, content, avatar, image, getRemove} = props;

return (
  
    <div class="post">
      <div class="post-header">
        {id}
        <img
          class="post-avatar"
          src={avatar}
          alt="User 3"
        />
        <div>
          <div class="post-author">{author}</div>
          <div class="post-time">{time}</div>
        </div>
      </div>
      <div class="post-content">{content}</div>
      <img
        class="post-image"
        src={image}
        alt="Post 3"
      />
      <button onClick={() => getRemove(id)} >DELETE</button>
    </div>

  )
}

export default App;




