import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Post from "./Components/Post";
import Create from "./Components/Create";
import PostPreview from "./Components/PostPreview";
import "./App.css";
import Contact from "./Components/Contact";
import { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      posts: null,
    };
  }
  componentDidMount() {
    axios
      .get("posts")
      .then((response) => {
        this.setState({ posts: response.data }, () => console.log(this.state));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  loginhandler = () => {
    this.setState({ auth: !this.state.auth });
  };
  deleteHandler = (id) => {
   axios.delete("posts/"+id)
   .then((response) => {
    console.log(response);
    
  })
  .catch((error) => {
    console.log(error);
  });
  };
  render() {
    let posts = null;
    if (this.state.posts != null) {
      const tenPosts = this.state.posts.splice(0, 10);
      posts = tenPosts.map((post) => {
        return (
          <PostPreview
          delete={() => this.deleteHandler(post.id)}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        );
      });
    }
    return (
      <div>
        <Router>
          <Navbar login={this.loginhandler} status={this.state.auth} />
          <Switch>
            <Route path="/about">
              <Header title="about us" img="about-bg.jpg" />
              <About />
            </Route>
            <Route path="/post">
              {this.state.auth === false ? (
                <Redirect to="/" />
              ) : (
                <>
                  <Header title="post us" img="post-bg.jpg" />
                  <Post />
                </>
              )}
            </Route>
            <Route path="/contact">
              <Header title="contect  us" img="contact.jpg" />
              <Contact />
            </Route>
            <Route path="/create">
              <Header title="create post" img="create.jpeg" />
              <Create />
            </Route>
            <Route path="/">
              <Header title="Fardin sheikh " img="home-bg.jpg" />
              <Home>{posts}</Home>
            </Route>
            <Route path="*">
              <Header title="404 page not found " img="404-bg.jpg" />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
