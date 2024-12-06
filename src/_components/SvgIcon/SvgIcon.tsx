import useId from "@/_hooks/useId";
import React from "react";

export type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  /**
   * Control the `id` HTML attribute.
   */
  id?: string;

  /**
   * Control the title.
   */
  title?: string;

  /**
   * Control the description.
   */
  desc?: string;

  /**
   * Control the size.
   * @default "sm"
   */
  size?: "sm" | "md" | "lg";

  /**
   * Control the `width` HTML attribute.
   */
  width?: string | number;

  /**
   * Control the `height` HTML attribute.
   */
  height?: string | number;

  /**
   * Control the `viewBox` HTML attribute.
   */
  viewBox?: string;

  /**
   * Control the content.
   */
  children: React.ReactNode;
};

const sizeBySizeCode: Record<NonNullable<SvgIconProps["size"]>, string> = {
  sm: "20",
  md: "24",
  lg: "32",
};

const SvgIcon = React.forwardRef(
  (props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => {
    const {
      id: idFromProps,
      title,
      desc,
      size = "sm",
      width,
      height,
      children,
      ...rest
    } = props;

    const id = useId(idFromProps);
    const svgId = `${id}-svg`;
    const titleId = `${id}-svg-title`;
    const descId = `${id}-svg-desc`;

    const sizeInt = sizeBySizeCode[size];
    const viewBoxSize = `0 0 ${sizeInt} ${sizeInt}`;
    const viewBoxWidthHeight = `0 0 ${width} ${height}`;

    return (
      <svg
        ref={ref}
        id={svgId}
        width={width ? width : sizeInt}
        height={height ? height : sizeInt}
        viewBox={width && height ? viewBoxWidthHeight : viewBoxSize}
        fill="none"
        focusable={false}
        role={title ? "img" : undefined}
        aria-hidden={title ? undefined : true}
        aria-labelledby={titleId}
        aria-describedby={descId}
        {...rest}
      >
        {title && <title id={titleId}>{title}</title>}

        {children}

        {desc && <desc id={descId}>{desc}</desc>}
      </svg>
    );
  }
);

SvgIcon.displayName = "SvgIcon";

export default SvgIcon;
