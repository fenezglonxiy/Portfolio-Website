import { css, Theme } from "@mui/material";

const getValidationTextErrorIconCss = (theme: Theme) => css`
  vertical-align: middle;
  margin-right: ${theme.spacing(1)};
`;

const getValidationTextCss = (theme: Theme) => ({
  errorIcon: getValidationTextErrorIconCss(theme),
});

export default getValidationTextCss;
