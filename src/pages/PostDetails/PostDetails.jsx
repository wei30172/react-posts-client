import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  getPost,
  getPostsBySearch,
} from "../../state/actions/actionCreators/postsActions";
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingPaperStyle,
  CardDiv,
  SectionDiv,
  ImageDiv,
  MediaImg,
  RecommendedDiv,
} from "./styles";
import moment from "moment";
import CommentSection from "../../components/CommentSection/CommentSection";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") }),
      );
    }
  }, [dispatch, post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} sx={LoadingPaperStyle}>
        <CircularProgress size="3em" />
      </Paper>
    );
  }

  const openPost = (_id) => {
    navigate(`/posts/${_id}`);
  };

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id); // remove current post

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      {/* Post Details */}
      <CardDiv>
        <SectionDiv>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
        </SectionDiv>
        <ImageDiv>
          <MediaImg
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </ImageDiv>
      </CardDiv>
      <CardDiv></CardDiv>
      {/* recommended Posts */}
      {!!recommendedPosts.length && (
        <SectionDiv>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <RecommendedDiv>
            {recommendedPosts.map(
              ({ title, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: "1rem", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    color="secondary"
                  >
                    Likes: {likes.length}
                  </Typography>
                  <img
                    alt={title}
                    style={{ borderRadius: "10px" }}
                    width="200px"
                    src={selectedFile}
                  />
                </div>
              ),
            )}
          </RecommendedDiv>
        </SectionDiv>
      )}
    </Paper>
  );
};

export default PostDetails;
