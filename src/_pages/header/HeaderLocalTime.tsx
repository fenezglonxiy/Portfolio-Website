import dynamic from "next/dynamic";

import { Typography } from "@/_components/Typography";
const LocalTime = dynamic(() => import("@/_components/local-time/LocalTime"), {
  ssr: false,
});

type Props = React.ComponentPropsWithoutRef<"div">;

function HeaderLocalTime(props: Props) {
  return (
    <div {...props}>
      <div>
        <Typography variant="caption" fontWeight="medium" color="neutral-550">
          Ho Chi Minh City, Vietnam
        </Typography>
      </div>

      <div>
        <LocalTime />
      </div>
    </div>
  );
}

export default HeaderLocalTime;
