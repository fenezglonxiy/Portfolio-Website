import { Button, ButtonProps } from "@/_components/Button";
import { ArrowUpRight } from "@/_icons";

type Props = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "color" | "children" | "type"
> & {
  /**
   * The type of the resource.
   */
  type: "git" | "demo" | "deployment";

  /**
   * A URL or path to navigate to a resource of the work.
   */
  href: ButtonProps["href"];
};

function WorkResourceLink(props: Props) {
  const { type, ...rest } = props;
  let label = "";

  switch (type) {
    case "git":
      label = "Visit repo";
      break;
    case "demo":
      label = "Visit demo";
      break;
    case "deployment":
      label = "Visit deployment";
      break;
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      shape="pill"
      icon={<ArrowUpRight />}
      iconPosition="end"
      target="_blank"
      fullWidth
      {...rest}
    >
      {label}
    </Button>
  );
}

export default WorkResourceLink;
