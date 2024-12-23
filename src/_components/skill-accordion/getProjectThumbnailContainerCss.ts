import { css, Theme } from "@mui/material";

const getProjectThumbnailContainer = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${theme.spacing(5)};
`;

export default getProjectThumbnailContainer;
