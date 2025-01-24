
import { CardContentBox } from "@/_components/Card";
import { Avatar } from "@/_components/avatar";
import { Typography } from "@/_components/Typography";

import TestimonialCardOrganizationLogo from "./TestimonialCardOrganizationLogo";

export type TestimonialEndorserOverview = {
  /**
   * The source of endorser avatar.
   */
  avatarSrc?: string;

  /**
   * The endorser name.
   */
  name: string;

  /**
   * The endorser job title.
   */
  title: string;

  /**
   * The organization where the endorser works at.
   */
  organization?: string;

  /**
   * The source of the organization where the endorser works at.
   */
  organizationLogoSrc?: string;
};

const defaultAvatarSrc = "avatar.png";

export type TestimonialCardEndorserOverviewProps =
  React.ComponentPropsWithoutRef<"div"> & TestimonialEndorserOverview;

function TestimonialCardEndorserOverview(
  props: TestimonialCardEndorserOverviewProps
) {
  const {
    avatarSrc: avatarSrcFromProps,
    name,
    title,
    organization,
    organizationLogoSrc,
    ...rest
  } = props;
  const avatarSrc = avatarSrcFromProps ? avatarSrcFromProps : defaultAvatarSrc;

  return (
    <CardContentBox
      orientation="horizontal"
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <CardContentBox orientation="horizontal" alignItems="center" flexGap={4}>
        <Avatar src={avatarSrc} variant="circular" />

        <CardContentBox>
          <Typography component="div" variant="body1Medium" fontWeight="bold">
            {name}
          </Typography>
          <Typography component="div" variant="body1Medium">
            {title}
            {organization && (
              <Typography component="span" variant="inherit" color="inherit">
                {" "}
                of
              </Typography>
            )}
            {organization && (
              <Typography component="span" variant="inherit" color="inherit">
                {" "}
                {organization}
              </Typography>
            )}
          </Typography>
        </CardContentBox>
      </CardContentBox>

      {organizationLogoSrc && (
        <TestimonialCardOrganizationLogo src={organizationLogoSrc} />
      )}
    </CardContentBox>
  );
}

export default TestimonialCardEndorserOverview;
