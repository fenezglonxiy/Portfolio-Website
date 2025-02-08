import { Typography } from "@/_components/Typography";

export type SkillShowcaseTitleProps = Omit<
  React.ComponentPropsWithoutRef<"h2">,
  "color"
>;

function SkillShowcaseTitle(props: SkillShowcaseTitleProps) {
  return <Typography component="h2" variant="subtitle2" {...props} />;
}

export default SkillShowcaseTitle;
