import { ArrowUpRight } from "@/_icons";
import { Link, LinkProps } from "@/_components/Link";

export type TimelineReferenceLinkProps = LinkProps & {
  children?: undefined | null;
};

function TimelineReferenceLink(props: TimelineReferenceLinkProps) {
  return (
    <div>
      <Link {...props}>
        <ArrowUpRight />
      </Link>
    </div>
  );
}

export default TimelineReferenceLink;
