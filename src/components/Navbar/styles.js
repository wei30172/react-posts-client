import { styled } from "@mui/system";

const HeadingStyle = (theme) => ({
  marginRight: theme.spacing(2),
  textDecoration: "none",
  flexGrow: 1,
});

const ProfileDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
});

const AvatarStyle = (theme) => ({
  marginLeft: theme.spacing(2),
});

export { HeadingStyle, ProfileDiv, AvatarStyle };
