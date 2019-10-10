import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as postAPI from '../../services/posts-api';
import PostListPage from '../../pages/PostListPage/PostListPage';
import AddPostPage from '../../pages/AddPostPage/AddPostPage';
import EditPostPage from '../../pages/EditPostPage/EditPostPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      posts: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(
      state => ({
        posts: [...state.posts, newPost]
      }),
      () => this.props.history.push('/')
    );
  };

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postAPI.update(updatedPostData);
    const newPostsArray = this.state.posts.map(p =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState(
      { posts: newPostsArray },
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/')
    );
  };

  handleDeletePost = async id => {
    await postAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        posts: state.posts.filter(p => p._id !== id)
      }),
      () => this.props.history.push('/')
    );
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const posts = await postAPI.getAll();
    this.setState({ posts });
  }

  render() {
    return (
      <div>
        <header className='header-footer'>Chirper: Coming Soon....</header>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <NavBar user={this.state.user} handleLogout={this.handleLogout} />
            )}
          />
          <Route
            exact
            path='/signup'
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <main>
            <Route
              exact
              path='/'
              render={({ history }) => (
                <PostListPage
                  post={this.state.posts}
                  handleDeletePost={this.handleDeletePost}
                />
              )}
            />
            <Route
              exact
              path='/add'
              render={() => <AddPostPage handleAddPost={this.handleAddPost} />}
            />
            <Route
              exact
              path='/edit'
              render={({ history, location }) => (
                <EditPostPage
                  handleUpdatePost={this.handleUpdatePost}
                  location={location}
                />
              )}
            />
          </main>
          :
          <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
