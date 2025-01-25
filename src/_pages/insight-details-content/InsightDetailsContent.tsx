import {
  InsightDetailsCTABox,
  InsightDetailsCTABoxContent,
  InsightDetailsCTABoxRightColumn,
  ShareInsightDetails,
} from "@/_components/insight-details-cta-box";

import InsightDetailsContainer from "./InsightDetailsContainer";
import InsightDetailsOverview from "./InsightDetailsOverview";
import InsightDetailsSection from "./InsightDetailsSection";
import InsightDetailsSectionTitle from "./InsightDetailsSectionTitle";
import InsightDetailsParagraph from "./InsightDetailsParagraph";
import InsightDetailsSectionContent from "./InsightDetailsSectionContent";
import InsightDetailsMediaBox from "./InsightDetailsMediaBox";
import InsightDetailsMedia from "./InsightDetailsMedia";
import InsightDetailsMediaReference from "./InsightDetailsMediaReference";
import InsightDetailsFeaturedBox from "./InsightDetailsFeaturedBox";
import InsightDetailsQuote from "./InsightDetailsQuote";
import InsightDetailsFeaturedBoxTitle from "./InsightDetailsFeaturedBoxTitle";
import InsightDetailsFeaturedBoxContent from "./InsightDetailsFeaturedBoxContent";
import InsightDetailsDivider from "./InsightDetailsDivider";
import OtherInsights from "./OtherInsights";
import InsightDetailsHero from "./InsightDetailsHero";

export type InsightDetailsContentProps = Omit<
  React.ComponentPropsWithoutRef<"main">,
  "children"
>;

function InsightDetailsContent(props: InsightDetailsContentProps) {
  return (
    <main {...props}>
      <InsightDetailsContainer>
        <InsightDetailsHero />

        <InsightDetailsOverview>
          Hendrerit gravida rutrum quisque non tellus orci. Sem et tortor
          consequat id. Varius duis at consectetur lorem donec massa sapien
          faucibus. Habitasse platea dictumst quisque sagittis purus. Adipiscing
          elit ut aliquam purus sit amet luctus venenatis.
        </InsightDetailsOverview>

        <InsightDetailsDivider color="slate-200" />

        <InsightDetailsSection>
          <InsightDetailsSectionTitle>Introduction</InsightDetailsSectionTitle>

          <InsightDetailsSectionContent>
            <InsightDetailsParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam
              maecenas sed enim ut sem viverra aliquet. Sit amet tellus cras
              adipiscing enim eu. Nec feugiat nisl pretium fusce id velit ut
              tortor pretium. Lectus proin nibh nisl condimentum id venenatis.
            </InsightDetailsParagraph>

            <InsightDetailsParagraph>
              Tellus rutrum tellus pellentesque eu. Purus viverra accumsan in
              nisl. Posuere sollicitudin aliquam ultrices sagittis orci a.
              Aliquam faucibus purus in massa tempor nec feugiat. Arcu ac tortor
              dignissim convallis aenean et. Amet mauris commodo quis imperdiet.
              Duis ut diam quam nulla porttitor massa id. Adipiscing elit
              pellentesque habitant morbi. Quam vulputate dignissim suspendisse
              in est ante. Iaculis urna id volutpat lacus laoreet. Pharetra vel
              turpis nunc eget. Augue mauris augue neque gravida in fermentum et
              sollicitudin.
            </InsightDetailsParagraph>
          </InsightDetailsSectionContent>
        </InsightDetailsSection>

        <InsightDetailsSection>
          <InsightDetailsSectionContent>
            <InsightDetailsMediaBox>
              <InsightDetailsMedia component="img" src="/insight-image.png" />

              <InsightDetailsMediaReference
                referenceLink="unsplash.com"
                providerName="unsplash.com"
              />
            </InsightDetailsMediaBox>
          </InsightDetailsSectionContent>
        </InsightDetailsSection>

        <InsightDetailsSection>
          <InsightDetailsSectionContent>
            <InsightDetailsFeaturedBox variant="block" color="royal-blue">
              <InsightDetailsFeaturedBoxContent>
                <InsightDetailsQuote>
                  Sit amet aliquam id diam maecenas ultricies mi eget mauris.
                  Lacus vestibulum sed arcu non. Ullamcorper malesuada proin
                  libero nunc.
                </InsightDetailsQuote>
              </InsightDetailsFeaturedBoxContent>
            </InsightDetailsFeaturedBox>
          </InsightDetailsSectionContent>
        </InsightDetailsSection>

        <InsightDetailsSection>
          <InsightDetailsSectionTitle>
            The First Step
          </InsightDetailsSectionTitle>

          <InsightDetailsSectionContent>
            <InsightDetailsParagraph>
              Pellentesque id nibh tortor id aliquet lectus proin. Vitae auctor
              eu augue ut. Erat imperdiet sed euismod nisi porta lorem.
              Adipiscing vitae proin sagittis nisl rhoncus. At quis risus sed
              vulputate odio ut enim. Cursus vitae congue mauris rhoncus aenean
              vel elit scelerisque. Nibh sed pulvinar proin gravida hendrerit
              lectus.
            </InsightDetailsParagraph>

            <InsightDetailsParagraph>
              Tortor dignissim convallis aenean et tortor at. Nec dui nunc
              mattis enim ut. Tincidunt ornare massa eget egestas purus. Purus
              viverra accumsan in nisl nisi. Nunc vel risus commodo viverra
              maecenas accumsan lacus.
            </InsightDetailsParagraph>

            <InsightDetailsParagraph>
              Nibh nisl condimentum id venenatis a condimentum vitae sapien
              pellentesque. Non enim praesent elementum facilisis leo vel.
              Sollicitudin ac orci phasellus egestas tellus rutrum tellus
              pellentesque.
            </InsightDetailsParagraph>

            <InsightDetailsParagraph>
              Quam vulputate dignissim suspendisse in. Vel fringilla est
              ullamcorper eget nulla. Posuere lorem ipsum dolor sit amet
              consectetur adipiscing. Non tellus orci ac auctor augue. Gravida
              in fermentum et sollicitudin ac orci phasellus.
            </InsightDetailsParagraph>
          </InsightDetailsSectionContent>
        </InsightDetailsSection>

        <InsightDetailsSection>
          <InsightDetailsSectionContent>
            <InsightDetailsMediaBox>
              <InsightDetailsMedia component="img" src="/insight-image.png" />

              <InsightDetailsMediaReference
                referenceLink="unsplash.com"
                providerName="unsplash.com"
              />
            </InsightDetailsMediaBox>
          </InsightDetailsSectionContent>
        </InsightDetailsSection>

        <InsightDetailsSection>
          <InsightDetailsSectionContent>
            <InsightDetailsFeaturedBox variant="filled" color="zircon">
              <InsightDetailsFeaturedBoxTitle
                color="royal-blue"
                icon={<i className="fa-sharp fa-light fa-lightbulb"></i>}
                iconPosition="start"
              >
                Conclusion
              </InsightDetailsFeaturedBoxTitle>

              <InsightDetailsFeaturedBoxContent>
                <InsightDetailsParagraph>
                  Massa enim nec dui nunc mattis enim ut tellus elementum.
                  Fermentum odio eu feugiat pretium nibh ipsum consequat nisl
                  vel. Elementum nisi quis eleifend quam adipiscing vitae proin
                  sagittis nisl. Pulvinar mattis nunc sed blandit.
                </InsightDetailsParagraph>
              </InsightDetailsFeaturedBoxContent>
            </InsightDetailsFeaturedBox>
          </InsightDetailsSectionContent>
        </InsightDetailsSection>

        <InsightDetailsCTABox>
          <InsightDetailsCTABoxContent>
            <InsightDetailsCTABoxRightColumn>
              <ShareInsightDetails />
            </InsightDetailsCTABoxRightColumn>
          </InsightDetailsCTABoxContent>
        </InsightDetailsCTABox>
      </InsightDetailsContainer>

      <OtherInsights />
    </main>
  );
}

export default InsightDetailsContent;
