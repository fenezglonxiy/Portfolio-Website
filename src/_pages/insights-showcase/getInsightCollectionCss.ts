import { css, Theme } from "@mui/material";

const getInsightCollectionHeaderCss = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(8)};
`;

const getInsightCollectionTabListBoxCss = () => css`
  flex: 1;
`;

const getInsightCollectionSearchbarCss = () => css`
  width: min(100%, 320px);
`;

const getInsightCollectionCss = (theme: Theme) => ({
  header: getInsightCollectionHeaderCss(theme),
  tabListBox: getInsightCollectionTabListBoxCss(),
  searchbar: getInsightCollectionSearchbarCss(),
});

export default getInsightCollectionCss;
