import clsx from "clsx";

export type WorkBusinessSectorBoxProps = React.ComponentPropsWithoutRef<"div">;

function WorkBusinessSectorBox(props: WorkBusinessSectorBoxProps) {
  const { className, ...rest } = props;

  return <div className={clsx("flow-spacer-x", className)} {...rest} />;
}

export default WorkBusinessSectorBox;
