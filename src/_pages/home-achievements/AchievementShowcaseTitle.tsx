import { Typography } from "@/_components/Typography";

type Props = Omit<React.ComponentPropsWithoutRef<"h3">, "color">;

function AchievementShowcaseTitle(props: Props) {
  return (
    <Typography
      component="h3"
      variant="h5"
      color="neutral-800"
      fontWeight="semi-bold"
      transform="capitalize"
      {...props}
    />
  );
}

export default AchievementShowcaseTitle;
