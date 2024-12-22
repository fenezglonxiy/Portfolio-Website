import { SvgIcon, SvgIconProps } from "@/_components/SvgIcon";

export type DownloadProps = SvgIconProps;

function Download(props: Omit<DownloadProps, "children">) {
  const { size = "md", ...rest } = props;
  const useHref = `download.svg#${size}`;

  return (
    <SvgIcon size={size} {...rest}>
      <use xlinkHref={useHref} />
    </SvgIcon>
  );
}

export default Download;
