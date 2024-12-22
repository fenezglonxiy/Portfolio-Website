import { css, Theme } from "@mui/material";

const getFooterContentCss = () => css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const getFooterNavMenuCss = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing(20)};
  padding: ${theme.spacing(20)};
`;

const getFooterTrademarkCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(3)};
`;

const getFooterNavListCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(5)};
`;

const getFooterContactCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(4.5)};
  padding: ${theme.spacing(20)};
  color: ${theme.palette.common.white};
  background-color: ${theme.palette.neutral[800]};
`;

const getFooterLetsTalkCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(9)};
`;

const getFooterLetsTalkTextCss = (theme: Theme) => css`
  --flow-spacing-y: ${theme.spacing(3)};
`;

const getFooterLocalTimeCss = (theme: Theme) => css`
  --flow-spacing-x: ${theme.spacing(2)};

  & > span {
    vertical-align: middle;
  }
`;

const getFooterCss = (theme: Theme) => ({
  content: getFooterContentCss(),
  navMenu: getFooterNavMenuCss(theme),
  trademark: getFooterTrademarkCss(theme),
  navList: getFooterNavListCss(theme),
  contact: getFooterContactCss(theme),
  letsTalk: getFooterLetsTalkCss(theme),
  letsTalkText: getFooterLetsTalkTextCss(theme),
  localTime: getFooterLocalTimeCss(theme),
});

export default getFooterCss;
