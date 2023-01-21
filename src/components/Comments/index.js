import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  onChangeInputElement = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeTextareaElement = event => {
    this.setState({commentInput: event.target.value})
  }

  addInputTextareaToList = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state

    const initialClassNameBackGroundColor = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      initialClassName: initialClassNameBackGroundColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  toggleTheLikedImg = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteBtn = id => {
    const {commentsList} = this.state

    const filterList = commentsList.filter(eachComment => eachComment.id !== id)

    this.setState({commentsList: filterList})
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="comment-container">
          <h1 className="main-heading">Comments</h1>
          <div className="comments-input">
            <form className="form" onSubmit={this.addInputTextareaToList}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                placeholder="Your Name"
                className="input-element"
                onChange={this.onChangeInputElement}
                value={nameInput}
              />
              <textarea
                rows="5"
                placeholder="Your Comment"
                className="text-area"
                onChange={this.onChangeTextareaElement}
                value={commentInput}
              />
              <button type="submit" className="button" data-testid="delete">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="line" />
          <p className="comment-small-heading">
            <span className="count-comments">{commentsList.length}</span>
            Comments
          </p>
          <ul className="un-order-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                toggleTheLikedImg={this.toggleTheLikedImg}
                onDeleteBtn={this.onDeleteBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
