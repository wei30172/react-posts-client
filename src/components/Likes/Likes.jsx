import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Likes = ({ likes, userId }) => {
  if (likes && likes.length > 0) {
    return likes.find((like) => like === userId)
      ? (
        <><ThumbUpIcon fontSize="small" /> {likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
      ) : (
        <><ThumbUpOffAltIcon fontSize="small" /> {likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
      )
  }
  return <><ThumbUpOffAltIcon fontSize="small" /> Like</>;
}

export default Likes