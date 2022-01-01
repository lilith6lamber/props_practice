import Post from "./Post";

function PostList (props) {
    return <ul>
        {
            props.posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} removePost={props.removePost} />
            ))
        }
    </ul>
}

export default PostList;