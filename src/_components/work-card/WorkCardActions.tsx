/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import { CardActions, CardActionsProps } from "@/_components/Card";

import getWorkCardActionsCss from "./getWorkCardActionsCss";

export type WorkCardActionsProps = CardActionsProps;

function WorkCardActions(props: WorkCardActionsProps) {
  const theme = useTheme();
  const css = getWorkCardActionsCss(theme);

  return <CardActions css={css} {...props} />;
}

export default WorkCardActions;
