import { SvgIcon, SvgIconProps } from "@/_components/SvgIcon";

function ArrowUpRight(props: Omit<SvgIconProps, "children">) {
  const useHref = "/arrow-up-right.svg#md";

  return (
    <SvgIcon {...props}>
      <use xlinkHref={useHref}></use>
    </SvgIcon>
  );
}

export default ArrowUpRight;
