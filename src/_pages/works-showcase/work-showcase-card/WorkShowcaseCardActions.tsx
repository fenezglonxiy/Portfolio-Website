/** @jsxImportSource @emotion/react */

import { CardActions, CardActionsProps } from "@/_components/Card";
import getWorkShowcaseCardActionsCss from "./getWorkShowcaseCardActionsCss";

export type WorkShowcaseCardActionsProps = CardActionsProps;

function WorkShowcaseCardActions(props: WorkShowcaseCardActionsProps) {
  const css = getWorkShowcaseCardActionsCss();

  return <CardActions css={css} {...props} />;
}

export default WorkShowcaseCardActions;
