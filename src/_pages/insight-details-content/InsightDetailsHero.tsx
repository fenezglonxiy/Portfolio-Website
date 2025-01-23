import { Breadcrumbs, BreadcrumbsSeparator } from "@/_components/breadcrumbs";
import { Hero, HeroProps } from "@/_components/hero";
import { Typography } from "@/_components/Typography";
import InsightDetailsCTABox from "@/_components/insight-details-cta-box/InsightDetailsCTABox";
import InsightDetailsCTABoxContent from "@/_components/insight-details-cta-box/InsightDetailsCTABoxContent";
import InsightDetailsCTABoxRightColumn from "@/_components/insight-details-cta-box/InsightDetailsCTABoxRightColumn";

import InsightDetailsHeroContent from "./InsightDetailsHeroContent";
import InsightDetailsHeroContainer from "./InsightDetailsHeroContainer";
import InsightDetailsHeroText from "./InsightDetailsHeroText";
import ShareInsightDetails from "@/_components/insight-details-cta-box/ShareInsightDetails";
import InsightDetailsHeroMedia from "../insight-details-content/InsightDetailsHeroMedia";

export type InsightDetailsHeroProps = HeroProps;

function InsightDetailsHero(props: InsightDetailsHeroProps) {
  return (
    <Hero {...props}>
      <InsightDetailsHeroMedia component="img" src="/insight-image.png" />

      <InsightDetailsHeroText>
        <Breadcrumbs
          component="ul"
          separator={
            <BreadcrumbsSeparator>
              <i className="fa-sharp fa-solid fa-circle"></i>
            </BreadcrumbsSeparator>
          }
        >
          <Typography variant="body1" fontWeight="medium" color="slate-800">
            Jun 25, 2025
          </Typography>

          <Typography variant="body1" fontWeight="medium" color="slate-800">
            8 min
          </Typography>

          <Typography variant="body1" fontWeight="medium" color="slate-800">
            Tips & Tricks
          </Typography>
        </Breadcrumbs>

        <Typography component="h1" variant="h4" color="slate-800">
          UI/UX Design In The Age Of Machine Learning: When Should You Sleep?
        </Typography>

        <InsightDetailsCTABox>
          <InsightDetailsCTABoxContent>
            <InsightDetailsCTABoxRightColumn>
              <ShareInsightDetails />
            </InsightDetailsCTABoxRightColumn>
          </InsightDetailsCTABoxContent>
        </InsightDetailsCTABox>
      </InsightDetailsHeroText>
    </Hero>
  );
}

export default InsightDetailsHero;
