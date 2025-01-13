import { Typography } from "@/_components/Typography";
import { CardHighlight } from "@/_components/Card";

import { InsightCardVariant } from "./types";

export type InsightReadTimeProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "color" | "children"
> & {
  /**
   * The variant to use. It should the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;

  children?: string;
};

function InsightReadTime(props: InsightReadTimeProps) {
  const { variant = "base", children, ...rest } = props;

  if (variant === "base") {
    return <CardHighlight>{children}</CardHighlight>;
  }

  return (
    <Typography component="div" variant="body1" fontWeight="medium" {...rest}>
      {children}
    </Typography>
  );
}

export default InsightReadTime;
