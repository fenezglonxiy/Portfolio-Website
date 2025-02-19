import { Typography } from "@/_components/Typography";
import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";

import HomeAboutMeContent from "./HomeAboutMeContent";
import HomeAboutMeSummary from "./HomeAboutMeSummary";
import HomeAboutMeDetails from "./HomeAboutMeDetails";
import HomeAboutMeContainer from "./HomeAboutMeContainer";
import BusinessAttention from "./BusinessAttention";
import SkillList from "./SkillList";
import SkillListItem from "./SkillListItem";
import HomeAboutMeCTABox from "./HomeAboutMeCTABox";

type Props = Omit<React.ComponentPropsWithoutRef<"div">, "children">;

function HomeAboutMe(props: Props) {
  return (
    <section {...props}>
      <HomeAboutMeContent>
        <HomeAboutMeContainer>
          <HomeAboutMeSummary>
            A web developer focused on creating efficient digital experience
          </HomeAboutMeSummary>

          <HomeAboutMeDetails>
            <BusinessAttention>
              Concentrate on your primary objective in expanding your business,
              and delegate it to me to ensure that your business is efficiently
              operated digitally and distinguishes itself from the competitors.
            </BusinessAttention>

            <SkillList>
              <SkillListItem>
                <Typography
                  variant="body1"
                  color="neutral-650"
                  transform="uppercase"
                >
                  Web Development
                </Typography>
              </SkillListItem>
            </SkillList>

            <HomeAboutMeCTABox>
              <Button
                href="/about-me"
                size="large"
                shape="pill"
                iconPosition="end"
                icon={<ArrowRight size="md" />}
              >
                About Me
              </Button>
            </HomeAboutMeCTABox>
          </HomeAboutMeDetails>
        </HomeAboutMeContainer>
      </HomeAboutMeContent>
    </section>
  );
}

export default HomeAboutMe;
