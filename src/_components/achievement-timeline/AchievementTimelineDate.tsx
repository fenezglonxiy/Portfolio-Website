import clsx from "clsx";
import { format } from "date-fns";

import { Achievement } from "@/types";
import { Typography, TypographyProps } from "@/_components/Typography";

export type AchievementTimelineDateProps =
  React.ComponentPropsWithoutRef<"p"> & {
    /**
     * The date when the achievement title is first achieved.
     */
    achievementDate: Achievement["achievementDate"];

    /**
     * The date when the achievement title is expired.
     */
    expiryDate?: Achievement["expiryDate"];

    /**
     * Control the variant of the typography.
     * @default "body1"
     */
    variant?: TypographyProps["variant"];

    /**
     * Control the color of the typography.
     * @default "neutral-550"
     */
    color?: TypographyProps["color"];

    /**
     * Control the font-weight of the typography.
     */
    fontWeight?: TypographyProps["fontWeight"];

    /**
     * Control the transformation of text.
     */
    transform?: TypographyProps["transform"];

    children?: undefined | null;
  };

function AchievementTimelineDate(props: AchievementTimelineDateProps) {
  const {
    achievementDate: achievementDateFromProps,
    expiryDate: expiryDateFromProps,
    variant = "body1",
    color = "neutral-550",
    className,
    ...rest
  } = props;
  const dateFormat = "MMMM yyyy";
  const achievementDate = format(achievementDateFromProps, dateFormat);
  const expiryDate = expiryDateFromProps
    ? format(expiryDateFromProps, dateFormat)
    : undefined;
  const isPresent = expiryDateFromProps?.getDate() === new Date().getTime();

  return (
    <Typography
      component="div"
      className={clsx("flow-spacer-x", className)}
      variant={variant}
      color={color}
      {...rest}
    >
      <Typography component="span" variant="inherit">
        {achievementDate}
      </Typography>
      {expiryDate && (
        <>
          <Typography component="span" variant="inherit">
            -
          </Typography>
          <Typography component="span" variant="inherit">
            {isPresent ? "Present" : expiryDate}
          </Typography>
        </>
      )}
    </Typography>
  );
}

export default AchievementTimelineDate;
