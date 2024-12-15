import { css } from "@mui/material";

const getTestimonialOrganizationLogoCss = () => css`
  height: 36px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default getTestimonialOrganizationLogoCss;
