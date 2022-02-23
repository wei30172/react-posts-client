import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { getPostsBySearch } from '../../state/actions/actionCreators/postsActions'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@mui/material'
import { GridStyle, PaginationStyle, AppBarSearchStyle } from './styles'

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import Pagination from '../../components/Pagination/Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Home () {
  const [currentId, setCurrentId] = useState(0)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const query = useQuery()
  const navigate = useNavigate()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search, tags: search }))
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${search}`)
    } else {
      navigate('/')
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost()
    }
  }

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          sx={GridStyle}
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={8} lg={9}>
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AppBar sx={AppBarSearchStyle} position="static" color="inherit">
              <TextField
                value={search}
                onKeyDown={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                variant="outlined"
                label="Search Posts"
                fullWidth
              />
              <Button
                sx={{ marginTop: '10px' }}
                onClick={searchPost}
                variant="contained"
                color="primary">
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {(!searchQuery) && (
              <Paper sx={PaginationStyle} elevation={6}>
              <Pagination page={page}/>
            </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}