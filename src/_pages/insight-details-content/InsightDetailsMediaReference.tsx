/** @jsxImportSource @emotion/react */

"use client";

import { Url } from "next/dist/shared/lib/router/router";
import { useTheme } from "@mui/material";

import { Typography } from "@/_components/Typography";
import { Link } from "@/_components/Link";

import getInsightDetailsMediaReferenceCss from "./getInsightDetailsMediaReferenceCss";

export type InsightDetailsMediaReferenceProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * A URL or path to navigate to the provider site.
   *
   * It could be a website, a web page or a social media platform of the
   * author.
   */
  referenceLink: Url;

  /**
   * The name of the provider or the author of the media.
   */
  providerName: string;
};

function InsightDetailsMediaReference(
  props: InsightDetailsMediaReferenceProps
) {
  const { referenceLink, providerName, ...rest } = props;
  const theme = useTheme();
  const css = getInsightDetailsMediaReferenceCss(theme);

  return (
    <div css={css} {...rest}>
      <Typography component="span" color="slate-400">
        <i
          className="fa-regular fa-link-simple fa-rotate-by"
          style={{ ["--fa-rotate-angle" as string]: "135deg" }}
        ></i>
      </Typography>

      <Typography component="span" color="slate-800">
        This media is provided by{" "}
        <Link href={referenceLink} variant="inherit" underline="always">
          {providerName}
        </Link>
      </Typography>
    </div>
  );
}

export default InsightDetailsMediaReference;
