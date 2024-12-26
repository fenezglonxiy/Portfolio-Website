import AboutMeSkillsContent from "./AboutMeSkillsContent";
import AboutMeSkillsHeader from "./AboutMeSkillsHeader";
import AboutMeSkillsShowcase from "./AboutMeSkillsShowcase";

export type AboutMeSkillsProps = React.ComponentPropsWithoutRef<"section"> & {
  children?: undefined | null;
};

function AboutMeSkills(props: AboutMeSkillsProps) {
  return (
    <section {...props}>
      <AboutMeSkillsContent>
        <AboutMeSkillsHeader />

        <AboutMeSkillsShowcase />
      </AboutMeSkillsContent>
    </section>
  );
}

export default AboutMeSkills;
