import clsx from "clsx";

type Props = React.ComponentPropsWithoutRef<"div">;

function WorkBusinessSectorBox(props: Props) {
  const { className, ...rest } = props;

  return <div className={clsx("flow-spacer-x", className)} {...rest} />;
}

export default WorkBusinessSectorBox;
