import './App.css';
import {Component} from "react";
import PostList from "./components/PostList";

class App extends Component {
    state = {
        posts: [
            {id: 'abc123', name: 'Lorem Ipsum'},
            {id: 'abc456', name: 'Some Text'},
            {id: 'abc789', name: 'Title Placeholder'}
        ]
    }

    removePost = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id !== id)})
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <PostList posts={this.state.posts} removePost={this.removePost}/>
                </div>
            </div>
        )
    }
}


export default App;
