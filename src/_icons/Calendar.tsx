import { SvgIcon, SvgIconProps } from "@/_components/SvgIcon";

export type CalendarProps = Omit<SvgIconProps, "children">;

function Calendar(props: CalendarProps) {
  const { size = "md", ...rest } = props;
  const useHref = `calendar.svg#${size}`;

  return (
    <SvgIcon size={size} {...rest}>
      <use xlinkHref={useHref}></use>
    </SvgIcon>
  );
}

export default Calendar;
