import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../state/actions/actionCreators/postActions'
import { Paper, Typography, Button, TextField } from '@mui/material'
import { FieldStyle, ButtonStyle, PaperStyle, FormStyle } from './styles'
import PostAddIcon from '@mui/icons-material/PostAdd'
import BackspaceIcon from '@mui/icons-material/Backspace'
import FileBase from 'react-file-base64'

export default function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const post = useSelector(state => currentId? state.posts.find((post) => post._id === currentId) : 0)

  useEffect(()=> {
    if(post) setPostData(post)
  }, [post])
  
  const clearPost = () => {
    setCurrentId(null)
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clearPost()
  }

  return (
    <Paper sx={PaperStyle}>
      <Typography
        variant='h6'
        color={currentId ? 'secondary': 'textSecondary'}
        component='h2'
        gutterBottom
      >
        {currentId ? "Editing the Post" : 'Create a New Post'}
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} sx={FormStyle}>
        <TextField
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
          name="creator"
          label="Creator" 
          variant="outlined" 
          color="secondary"
          fullWidth
          sx={FieldStyle}
        />
        <TextField
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          name="title"
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={FieldStyle}
        />
        <TextField
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          name="message" 
          label="Message" 
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          sx={FieldStyle}
        />
        <TextField
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          name="tags"
          label="Tags (coma separated)"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={FieldStyle}
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          sx={FieldStyle}
        />
        <Button
          onClick={handleSubmit}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<PostAddIcon />}
          size="small"
          fullWidth
          sx={ButtonStyle}
        >
          Submit
        </Button>
        <Button
          onClick={clearPost}
          color="primary"
          variant="contained"
          endIcon={<BackspaceIcon />}
          size="small"
          fullWidth
          sx={ButtonStyle}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}