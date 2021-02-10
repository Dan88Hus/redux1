import React from 'react';
import { connect } from 'react-redux';
import {fetchPost, fetchPostAndUsers} from '../actions';
import UserHeader from './UserHeader';



class PostList extends React.Component {
  componentDidMount(){
    // this.props.fetchPost() alttakini yazdik bunun yerine
    this.props.fetchPostAndUsers();
  } 
  renderList(){
    return this.props.posts.map(post => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'/>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
          
        </div>
      )
    })
  }

  render () {
    console.log(this.props.posts);
    return (
      <div className='ui relaxed divided list'>{this.renderList()}</div> 
    )
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts};
}

// 1st one is mapState...
// 2nd argument is the action creator
export default connect(mapStateToProps, {fetchPostAndUsers })(PostList);