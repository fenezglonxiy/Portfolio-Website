import { css, formLabelClasses, Theme } from "@mui/material";

const getFormLabelCss = (theme: Theme) => css`
  ${theme.typography.body2Medium};
  font-weight: ${theme.typography.fontWeightBold};
  margin-bottom: ${theme.spacing(2)};

  & .${formLabelClasses.asterisk} {
    display: none;
  }

  &.${formLabelClasses.focused},&.${formLabelClasses.error} {
    color: unset;
  }
`;

export default getFormLabelCss;
