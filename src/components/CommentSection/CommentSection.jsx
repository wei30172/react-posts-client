import React, { useState, useRef } from 'react'
import { Typography, TextField, Button } from  '@mui/material'
import { useDispatch } from 'react-redux'
import { commentPost } from '../../state/actions/actionCreators/postsActions'
import { CommentsOuterContainer, CommentsInnerContainer } from './styles'

const CommentSection = ({ post }) => {
  const dispatch = useDispatch()
  const commentsRef = useRef()
  const user = JSON.parse(localStorage.getItem('profile'))
  const [comments, setComments] = useState(post?.comments)
  const [comment, setComment] = useState('')

  const handleComment = async() => {
    const finalComment = `${user?.result?.name}: ${comment}`
    const newComments = await dispatch(commentPost(finalComment, post._id))
    
    setComment('')
    setComments(newComments)
    
    commentsRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <CommentsOuterContainer>
      <CommentsInnerContainer>
        <Typography gutterBottom variant="h6">Comments</Typography>
        {!user?.result?.name && (
          <Typography variant="subtitle2">
            Please Log In to left your comment.
          </Typography>
        )}
        {comments?.map((c, index) => (
          <Typography key={index} gutterBottom variant="subtitle1">
            <strong>{c.split(': ')[0]}</strong>
            {c.split(':')[1]}
          </Typography>
        ))}
        <div ref={commentsRef} />
      </CommentsInnerContainer>
      {user?.result?.name && (
        <div style={{ width: '40%' }}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField label="Comment" rows={4} multiline fullWidth variant="outlined" value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} disabled={!comment.length} fullWidth color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div>
      )}
    </CommentsOuterContainer>
  )
}

export default CommentSection