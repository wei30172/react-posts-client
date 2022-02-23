import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletePost, likePost } from '../../../state/actions/actionCreators/postsActions'
import { Typography, Card, ButtonBase, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import { CardStyle, ButtonBaseStyle, MediaStyle, OverlayDiv, OverlayBtn, DetailsDiv, TitleDiv, ActionsStyle } from './styles'

import { pink, blue } from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import moment from 'moment'

import Likes from '../../../components/Likes/Likes'

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'))

  const openPost = (e) => {
    navigate(`/posts/${post._id}`)
  }

  return (
    <Card sx={CardStyle} raised elevation={6}>
        <CardMedia 
          sx={MediaStyle}
          image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
          title={post.title}
        />
        <OverlayDiv>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </OverlayDiv>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <OverlayBtn>
          <Button style={{ color: 'white' }} size="large" onClick={() => setCurrentId(post._id) }>
            <EditIcon fontSize="default" />
          </Button>
        </OverlayBtn>
        )}
      <ButtonBase
        component="span"
        sx={ButtonBaseStyle}
        onClick={openPost}
      >
        <DetailsDiv>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </DetailsDiv>
        <TitleDiv>
          <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
        </TitleDiv>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions sx={ActionsStyle}>
        <Button 
          size="small" sx={{color: blue[500]}}
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}>
          <Likes likes={post.likes} user={user}/>
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button
          size="small"
          sx={{color: pink[500]}}
          onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  )
}