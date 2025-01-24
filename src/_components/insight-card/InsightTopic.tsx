import { Chip, ChipProps } from "@/_components/chip";

export type InsightTopicProps = Omit<ChipProps, "variant" | "color">;

function InsightTopic(props: InsightTopicProps) {
  return (
    <div>
      <Chip variant="filled" color="indigo" {...props} />
    </div>
  );
}

export default InsightTopic;
