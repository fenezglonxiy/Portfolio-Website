import { cardMediaClasses, css, Theme } from "@mui/material";

const getExpandedWorkCardMediaCss = (theme: Theme) => css`
  height: 420px;

  & .${cardMediaClasses.root} {
    height: 100%;
    border-radius: ${theme.shape.md};
  }
`;

export default getExpandedWorkCardMediaCss;
