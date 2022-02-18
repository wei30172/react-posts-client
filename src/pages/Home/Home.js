import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../state/actions/actionCreators/postsActions'
import { Container, Grow, Grid } from '@mui/material'
import { gridStyle } from './styles'

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';

export default function Home () {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid
          container
          sx={gridStyle}
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}