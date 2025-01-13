import { Chip, ChipProps } from "@/_components/chip";

import { InsightCardVariant } from "./types";

export type InsightCardChipProps = Omit<ChipProps, "variant" | "color"> & {
  /**
   * The variant to use. It should match the insight card variant.
   * @default "base"
   */
  variant?: InsightCardVariant;
};

function InsightCardChip(props: InsightCardChipProps) {
  const { variant = "base", ...rest } = props;

  if (variant === "main") {
    return <Chip variant="outlined" color="white" {...rest} />;
  }

  return <Chip variant="filled" color="indigo" {...rest} />;
}

export default InsightCardChip;
