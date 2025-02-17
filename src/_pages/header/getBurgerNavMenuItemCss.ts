import { css, Theme } from "@mui/material";

const getBurgerNavMenuItemCss = (theme: Theme) => css`
  padding: ${theme.spacing(1)} ${theme.spacing(4)};
  position: relative;
  display: block;
  border-radius: ${theme.shape.xs};
  color: ${theme.palette.common.white};
  transition: color ease 200ms;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: ${theme.palette.common.white};
    transition: width ease 400ms;
    border-radius: ${theme.shape.xs};
  }

  & > a {
    position: relative;
    display: block;
    font-weight: ${theme.typography.fontWeightSemibold};
  }

  &:hover {
    color: ${theme.palette.neutral[900]};

    &::before {
      width: 100%;
    }
  }
`;

export default getBurgerNavMenuItemCss;
