const GridStyle = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
});

const PaginationStyle = (theme) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: 2,
});

const AppBarSearchStyle = (theme) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: 2,
});

export { GridStyle, PaginationStyle, AppBarSearchStyle };
