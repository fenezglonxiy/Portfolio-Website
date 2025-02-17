import { css, Theme } from "@mui/material";

const getSkillListCss = (theme: Theme) => css`
  justify-self: flex-end;
  --flow-spacing-y: ${theme.spacing(6)};
`;

export default getSkillListCss;
