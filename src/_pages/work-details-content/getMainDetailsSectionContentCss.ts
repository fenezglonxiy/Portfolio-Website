import { css, Theme } from "@mui/material";

const getMainDetailsSectionContentCss = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(6)};

  & .work-details-text {
    & > p:not(:first-of-type) {
      margin-top: ${theme.spacing(4)};
    }
  }

  & .work-details-list {
    list-style: initial;
    padding-left: ${theme.spacing(8)};

    &-item {
      padding: ${theme.spacing(1)};
    }
  }

  & .work-details-reference-link {
    text-decoration: underline;
    color: ${theme.palette.neutral[600]};
  }
`;

export default getMainDetailsSectionContentCss;
