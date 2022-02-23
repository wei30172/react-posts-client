import React from 'react'
import { styled } from '@mui/system'
import { Box } from '@mui/material'
import Navbar from '../Navbar/Navbar'

const Page = styled('div')(
  ({ theme }) => ({
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  })
)

export default function Layout({ children }) {
  return (
    <Box>
      {/* app bar */}
      <Navbar />

      {/* main content */}
      <Page>
        { children }
      </Page>
    </Box>
  )
}
