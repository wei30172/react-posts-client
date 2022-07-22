import { styled } from "@mui/system";

const LoadingPaperStyle = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: "15px",
  height: "30vh",
});

const CardDiv = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
}));

const SectionDiv = styled("div")({
  flex: 1,
  margin: "10px",
  borderRadius: "20px",
});

const ImageDiv = styled("div")({
  flex: 1,
  margin: "10px",
  borderRadius: "20px",
});

const MediaImg = styled("img")({
  objectFit: "cover",
  width: "100%",
  maxHeight: "600px",
  borderRadius: "20px",
});

const RecommendedDiv = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export {
  LoadingPaperStyle,
  CardDiv,
  SectionDiv,
  ImageDiv,
  MediaImg,
  RecommendedDiv,
};
