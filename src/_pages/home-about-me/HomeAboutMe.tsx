import React from "react";

import HomeAboutMeContent from "./HomeAboutMeContent";
import HomeAboutMeSummary from "./HomeAboutMeSummary";
import HomeAboutMeDetails from "./HomeAboutMeDetails";

export type HomeAboutMeProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
>;

function HomeAboutMe(props: HomeAboutMeProps) {
  return (
    <section {...props}>
      <HomeAboutMeContent>
        <HomeAboutMeSummary />

        <HomeAboutMeDetails />
      </HomeAboutMeContent>
    </section>
  );
}

export default HomeAboutMe;
