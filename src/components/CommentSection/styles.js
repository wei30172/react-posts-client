import { styled } from "@mui/system";

const CommentsOuterContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const CommentsInnerContainer = styled("div")({
  height: "200px",
  overflowY: "auto",
  marginRight: "1rem",
});

export { CommentsOuterContainer, CommentsInnerContainer };
