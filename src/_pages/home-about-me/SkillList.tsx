/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import clsx from "clsx";

import { List } from "@/_components/list";

import getSkillListCss from "./getSkillListCss";

type Props = React.ComponentPropsWithoutRef<"ul">;

function SkillList(props: Props) {
  const { className, ...rest } = props;
  const theme = useTheme();
  const css = getSkillListCss(theme);

  return (
    <List
      css={css}
      className={clsx("flow-spacer-y", className)}
      disablePadding
      {...rest}
    />
  );
}

export default SkillList;
