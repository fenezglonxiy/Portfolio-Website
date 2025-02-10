import { SvgIcon, SvgIconProps } from "@/_components/SvgIcon";

const widthBySize: Record<NonNullable<SvgIconProps["size"]>, number> = {
  sm: 14,
  md: 19,
  lg: 19,
};

const heightBySize: Record<NonNullable<SvgIconProps["size"]>, number> = {
  sm: 12,
  md: 16,
  lg: 16,
};

function ArrowRight(props: Omit<SvgIconProps, "children">) {
  const { size = "sm", ...rest } = props;
  const useHref = `/arrow-right.svg#${size}`;
  const width = widthBySize[size];
  const height = heightBySize[size];

  return (
    <SvgIcon width={width} height={height} {...rest}>
      <use xlinkHref={useHref}></use>
    </SvgIcon>
  );
}

export default ArrowRight;
