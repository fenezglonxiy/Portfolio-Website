import { Chip, ChipProps } from "@/_components/chip";

export type InsightTagProps = Omit<ChipProps, "variant" | "color">;

function InsightTag(props: InsightTagProps) {
  return <Chip variant="outlined" color="white" {...props} />;
}

export default InsightTag;
