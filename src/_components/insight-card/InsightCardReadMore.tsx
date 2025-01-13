import { Button } from "@/_components/Button";

import { ArrowUpRight } from "@/_icons";

import { InsightCardDetails, InsightCardVariant } from "./types";

export type InsightCardReadMoreProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "color"
> & {
  /**
   * A URL or path to navigate to the insight details page.
   */
  href: InsightCardDetails["href"];

  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

function InsightCardReadMore(props: InsightCardReadMoreProps) {
  const { href, variant, ...rest } = props;

  if (variant === "main") {
    return (
      <Button
        href={href}
        variant="outlined"
        color="white"
        iconPosition="end"
        icon={<ArrowUpRight />}
        {...rest}
      >
        Read More
      </Button>
    );
  }

  return (
    <Button
      href={href}
      variant="text"
      color="primary"
      iconPosition="end"
      icon={<ArrowUpRight />}
      {...rest}
    >
      Read More
    </Button>
  );
}

export default InsightCardReadMore;
