import { Link } from "@/_components/Link";
import { Logo } from "@/_components/Logo";

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderLogo(props: Props) {
  return (
    <div {...props}>
      <Link href="/" color="inherit">
        <Logo />
      </Link>
    </div>
  );
}

export default HeaderLogo;
