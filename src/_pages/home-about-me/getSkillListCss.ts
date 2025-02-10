import { css, Theme } from "@mui/material";

const getSkillListCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(6)};
`;

export default getSkillListCss;
