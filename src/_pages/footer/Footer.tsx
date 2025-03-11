import { Button } from "@/_components/Button";
import { Typography } from "@/_components/Typography";
import { Link } from "@/_components/Link";

import FooterContent from "./FooterContent";
import FooterLocalTime from "./FooterLocalTime";
import FooterNav from "./FooterNav";
import FooterTrademark from "./FooterTrademark";
import FooterNavList from "./FooterNavList";
import FooterContact from "./FooterContact";
import FooterLetsTalk from "./FooterLetsTalk";
import FooterLetsTalkText from "./FooterLetsTalkText";
import FooterNavListItem from "./FooterNavListItem";

export type FooterProps = React.ComponentPropsWithoutRef<"div">;

function Footer(props: FooterProps) {
  return (
    <footer {...props}>
      <FooterContent>
        <FooterNav>
          <FooterTrademark />

          <FooterNavList>
            <FooterNavListItem>
              <Link href="/works" variant="body2Medium">
                Works
              </Link>
            </FooterNavListItem>

            <FooterNavListItem>
              <Link href="/about-me" variant="body2Medium">
                About me
              </Link>
            </FooterNavListItem>
          </FooterNavList>
        </FooterNav>

        <FooterContact>
          <FooterLetsTalk>
            <FooterLetsTalkText>
              <div>
                <Typography variant="body1Medium" fontWeight="medium">
                  Have a project?
                </Typography>
              </div>

              <div>
                <Typography variant="h5" fontWeight="semi-bold">
                  Let’s talk with me
                </Typography>
              </div>
            </FooterLetsTalkText>

            <div>
              <Button href="/contact" variant="contained" color="secondary">
                Talk With Me
              </Button>
            </div>
          </FooterLetsTalk>

          <FooterLocalTime />
        </FooterContact>
      </FooterContent>
    </footer>
  );
}

export default Footer;
