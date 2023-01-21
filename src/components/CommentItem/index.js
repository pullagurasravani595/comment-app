// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleTheLikedImg, onDeleteBtn} = props
  const {name, comment, isLiked, date, initialClassName, id} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)

  const isActive = isLiked ? 'highlighted-like' : 'like-inactive'

  console.log(initialClassName)

  const likedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteIcon = () => {
    onDeleteBtn(id)
  }

  const updateIsLiked = () => {
    toggleTheLikedImg(id)
  }

  return (
    <li className="item-container">
      <div className="profile-name-time-container">
        <p className={initialClassName}>{initial}</p>
        <div className="name-time-container">
          <p className="name">{name}</p>
          <p className="time">{postedTime}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={likedImageUrl} className="like-icon" alt="like-icon" />
          <button
            type="button"
            onClick={updateIsLiked}
            className={isActive}
            data-testid="delete"
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="button-btn"
          onClick={onDeleteIcon}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon-style"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
