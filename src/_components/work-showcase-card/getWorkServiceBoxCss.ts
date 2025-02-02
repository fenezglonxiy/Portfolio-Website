import { css, Theme } from "@mui/material";

const getWorkServiceBoxProps = (theme: Theme) => css`
  --flow-spacing-x: ${theme.spacing(2)};
`;

export default getWorkServiceBoxProps;
