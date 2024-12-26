/** @jsxImportSource @emotion/react */

import { Button } from "@/_components/Button";
import { Typography } from "@/_components/Typography";

import getHomeSelectedWorksHeaderCss from "./getHomeSelectedWorksHeaderCss";

export type HomeSelectedWorksHeaderProps =
  React.HTMLAttributes<HTMLDivElement> & {
    children?: undefined | null;
  };

function HomeSelectedWorksHeader(props: HomeSelectedWorksHeaderProps) {
  const css = getHomeSelectedWorksHeaderCss();

  return (
    <div css={css} {...props}>
      <div>
        <Typography variant="h3" fontWeight="semi-bold">
          Selected works
        </Typography>
      </div>

      <div>
        <Button href="/works" variant="outlined" color="primary" size="md">
          View All Works
        </Button>
      </div>
    </div>
  );
}

export default HomeSelectedWorksHeader;
