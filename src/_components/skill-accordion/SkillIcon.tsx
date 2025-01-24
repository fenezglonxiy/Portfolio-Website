import clsx from "clsx";

import { SvgIcon, SvgIconProps } from "@/_components/SvgIcon";

export type SkillIconProps = Omit<SvgIconProps, "children"> & {
  /**
   * Control the `xLinkHref` HTML attribute value of `<use>`.
   */
  xLinkHref: string;

  /**
   * Control the additional class names of component parts.
   */
  classes?: {
    root?: string;
    icon?: string;
  };
};

function SkillIcon(props: SkillIconProps) {
  const { xLinkHref, classes, className, ...rest } = props;

  return (
    <div className={clsx(classes?.root, className)}>
      <SvgIcon className={classes?.icon} {...rest}>
        <use xlinkHref={xLinkHref}></use>
      </SvgIcon>
    </div>
  );
}

export default SkillIcon;
