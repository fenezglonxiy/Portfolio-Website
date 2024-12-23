import { css, Theme } from "@mui/material";

const getProjectThumbnailCss = (theme: Theme) => css`
  height: 320px;

  & > img {
    border-radius: ${theme.shape.md};
  }
`;

export default getProjectThumbnailCss;
