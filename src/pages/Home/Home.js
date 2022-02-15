import React from 'react'
import { Container, Grow, Grid } from '@mui/material'
import { gridStyle } from './styles'

import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';

export default function Home ({ currentId, setCurrentId }) {
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