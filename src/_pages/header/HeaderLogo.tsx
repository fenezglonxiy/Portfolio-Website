import { Link } from "@/_components/Link";
import { Logo } from "@/_components/Logo";

type HeaderLogoProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderLogo(props: HeaderLogoProps) {
  return (
    <div {...props}>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  );
}

export default HeaderLogo;
