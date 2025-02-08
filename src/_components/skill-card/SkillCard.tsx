import { Card } from "@/_components/Card";

export type SkillCardProps = React.ComponentPropsWithoutRef<"div">;

function SkillCard(props: SkillCardProps) {
  return <Card variant="fill" borderRadius="none" {...props} />;
}

export default SkillCard;
