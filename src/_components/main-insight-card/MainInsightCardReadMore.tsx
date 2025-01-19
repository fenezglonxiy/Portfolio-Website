import { Button } from "@/_components/Button";

import { ArrowUpRight } from "@/_icons";
import { InsightCardDetails } from "@/types";

export type MainInsightCardReadMoreProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "color"
> & {
  /**
   * A URL or path to navigate to the insight details page.
   */
  href: InsightCardDetails["href"];
};

function MainInsightCardReadMore(props: MainInsightCardReadMoreProps) {
  const { href, ...rest } = props;

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

export default MainInsightCardReadMore;
