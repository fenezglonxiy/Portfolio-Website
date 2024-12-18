import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import React from "react";
import { Box } from "../box";

type HeroMediaBaseProps = {
  /**
   * Control the media source.
   */
  src: string;

  /**
   * Control the alternative text for the media.
   */
  alt?: string;

  /**
   * Control the element used for the root node.
   *
   * It should match with the media type for the component work properly.
   */
  component: "video" | "audio" | "picture" | "iframe" | "img";
};

export interface HeroMediaTypeMap<D extends React.ElementType = "div"> {
  props: HeroMediaBaseProps;
  defaultComponent: D;
}

export type HeroMediaProps<
  D extends React.ElementType = HeroMediaTypeMap["defaultComponent"]
> = OverrideProps<HeroMediaTypeMap<D>, D> & { component?: React.ElementType };

const HeroMedia: OverridableComponent<HeroMediaTypeMap> = React.forwardRef(
  function HeroMedia(props: HeroMediaProps, ref: React.Ref<HTMLDivElement>) {
    return <Box ref={ref} {...props} />;
  }
);

export default HeroMedia;
