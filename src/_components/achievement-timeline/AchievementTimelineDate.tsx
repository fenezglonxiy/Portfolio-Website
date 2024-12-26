import moment from "moment";
import clsx from "clsx";

import { Achievement } from "@/types";
import { Typography, TypographyProps } from "@/_components/Typography";

export type AchievementTimelineDateProps =
  React.ComponentPropsWithoutRef<"p"> & {
    /**
     * The date when the achievement title is first achieved.
     */
    date: Achievement["date"];

    /**
     * The period that the achievement title is achieved.
     */
    duration?: Achievement["duration"];

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
    date,
    duration,
    variant = "body1",
    color = "neutral-550",
    className,
    ...rest
  } = props;
  const dateFormat = "MMMM YYYY";
  const startDate = moment(date);
  const endDate = duration ? startDate.add(duration) : undefined;
  const isPresent = endDate?.format(dateFormat) === moment().format(dateFormat);

  return (
    <Typography
      component="div"
      className={clsx("flow-spacer-x", className)}
      variant={variant}
      color={color}
      {...rest}
    >
      <Typography component="span" variant="inherit">
        {date.format(dateFormat)}
      </Typography>
      {endDate && (
        <>
          <Typography component="span" variant="inherit">
            -
          </Typography>
          <Typography component="span" variant="inherit">
            {isPresent ? "Present" : endDate.format(dateFormat)}
          </Typography>
        </>
      )}
    </Typography>
  );
}

export default AchievementTimelineDate;
