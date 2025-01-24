/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";

import InsightCollection from "./InsightCollection";
import MainInsight from "./MainInsight";
import getInsightsShowcaseCss from "./getInsightsShowcaseCss";

export type InsightsShowcaseProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

function InsightsShowcase(props: InsightsShowcaseProps) {
  const theme = useTheme();
  const css = getInsightsShowcaseCss(theme);

  return (
    <section {...props}>
      <div css={css.content}>
        <div className="flow-spacer-y" css={css.container}>
          <MainInsight />
          <InsightCollection />
        </div>
      </div>
    </section>
  );
}

export default InsightsShowcase;
