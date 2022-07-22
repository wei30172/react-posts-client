import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { PaperStyle } from "./styles";
import Post from "./Post/Post";

export default function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!isLoading && !posts.length)
    return (
      <Paper sx={PaperStyle}>
        <Typography variant="h6" align="center">
          No posts
        </Typography>
      </Paper>
    );

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
