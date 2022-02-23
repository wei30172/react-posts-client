import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost, updatePost } from '../../state/actions/actionCreators/postsActions'
import { Paper, Typography, Button, TextField } from '@mui/material'
import { FormDiv, FileInputDiv, FieldStyle, ButtonStyle, PaperStyle } from './styles'
import PostAddIcon from '@mui/icons-material/PostAdd'
import BackspaceIcon from '@mui/icons-material/Backspace'
import FileBase from 'react-file-base64'

const initialState = { title: '', message: '', tags: '', selectedFile: ''}

export default function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [postData, setPostData] = useState(initialState)
  const post = useSelector(state => currentId ? state.posts.posts.find((post) => post._id === currentId) : null)
  const user = JSON.parse(localStorage.getItem('profile'))
  
  useEffect(()=> {
    if(post) setPostData(post)
  }, [post])
  
  const clearPost = () => {
    setCurrentId(0)
    setPostData(initialState);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate))
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }))
    }
    clearPost()
  }

  if (!user?.result?.name) {
    return (
      <Paper sx={PaperStyle} elevation={6}>
        <Typography variant="subtitle2" align="center">
          Please Log In to create your own posts and like other's posts.
        </Typography>
      </Paper>
    );
  }
  
  return (
    <Paper sx={PaperStyle} elevation={6}>
      <Typography
        variant='h6'
        color={currentId ? 'secondary': 'textSecondary'}
        component='h2'
        gutterBottom
      >
        {currentId ? "Editing the Post" : 'Create a New Post'}
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormDiv>
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
          <FileInputDiv>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
              sx={FieldStyle}
            />
          </FileInputDiv>
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
        </FormDiv>
      </form>
    </Paper>
  )
}