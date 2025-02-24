/** @jsxImportSource @emotion/react */

"use client";

import { CardActions, CardActionsProps } from "@/_components/Card";

import getExpandedWorkCardActionsCss from "./getExpandedWorkCardActionsCss";

type Props = CardActionsProps;

function ExpandedWorkCardActions(props: Props) {
  const css = getExpandedWorkCardActionsCss();

  return <CardActions css={css} {...props} />;
}

export default ExpandedWorkCardActions;
