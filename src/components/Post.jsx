function Post({id, name, removePost}) {
    return <li key={id}>{name}  <button onClick={() => removePost(id)}>Delete</button> </li>
}

export default Post;