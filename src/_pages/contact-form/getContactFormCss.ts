import { css, Theme } from "@mui/material";

const getContactFormContainerCss = (theme: Theme) => css`
  padding: 0 ${theme.spacing(18)} ${theme.spacing(18)};
`;

const getContactFormFormCss = (theme: Theme) => css`
  max-width: 656px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  --flow-spacing-y: ${theme.spacing(10)};
`;

const getCTABoxCss = () => css`
  align-self: flex-end;
`;

const getContactFormCss = (theme: Theme) => ({
  container: getContactFormContainerCss(theme),
  form: getContactFormFormCss(theme),
  ctaBox: getCTABoxCss(),
});

export default getContactFormCss;
