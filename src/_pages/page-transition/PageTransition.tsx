"use client";

import { styled } from "@mui/material";
import memoTheme from "@mui/material/utils/memoTheme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Url } from "next/dist/shared/lib/router/router";

import useIsomorphicLayoutEffect from "@/_hooks/useIsomorphicLayoutEffect";

import pageTransitionClasses from "./pageTransitionClasses";

gsap.registerPlugin(useGSAP);

type RootProps = React.ComponentPropsWithoutRef<"div">;

const PageTransitionRoot = styled("div", {
  name: "PageTransition",
  slot: "Root",
  overridesResolver: (_: RootProps, styles) => {
    return [styles.root];
  },
})<RootProps>(
  memoTheme(({ theme }) => ({
    overflow: "hidden",
    position: "fixed",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: theme.zIndex.pageTransition,
  }))
);

type RowProps = React.ComponentPropsWithoutRef<"div">;

const PageTransitionRow = styled("div", {
  name: "PageTransition",
  slot: "Row",
  overridesResolver: (_: RowProps, styles) => {
    return [styles.root];
  },
})<RowProps>({
  flex: 1,
  display: "flex",

  [`&.${pageTransitionClasses.firstRow}`]: {
    transformOrigin: "top",
  },

  [`&.${pageTransitionClasses.secondRow}`]: {
    transformOrigin: "bottom",
  },
});

type BlockProps = React.ComponentPropsWithoutRef<"div">;

const PageTransitionBlock = styled("div", {
  name: "PageTransition",
  slot: "Block",
  overridesResolver: (_: BlockProps, styles) => {
    return [styles.root];
  },
})<BlockProps>(
  memoTheme(({ theme }) => ({
    flex: 1,
    willChange: "transform",
    margin: theme.spacing(-0.5),
    background: theme.palette.neutral[900],
  }))
);

const animateTransition = () => {
  return new Promise((resolve) => {
    gsap.set(`.${pageTransitionClasses.root}`, { display: "flex" });
    gsap.set(`.${pageTransitionClasses.root}`, { zIndex: 100000 });

    gsap.set(`.${pageTransitionClasses.block}`, {
      visibility: "visible",
      scaleY: 0,
    });

    gsap.to(`.${pageTransitionClasses.block}`, {
      scaleY: 1,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
        grid: [2, 5],
        axis: "x",
      },
      onComplete: resolve,
    });
  });
};

const revealTransition = () => {
  return new Promise((resolve) => {
    gsap.set(`.${pageTransitionClasses.block}`, { scaleY: 1 });

    gsap.to(`.${pageTransitionClasses.block}`, {
      scaleY: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "start",
        grid: [2, 5],
        axis: "x",
      },
      onComplete: resolve,
    });
  });
};

type PageWrapperProps = React.PropsWithChildren;

export function PageTransitionPageWrapper(props: PageWrapperProps) {
  const { children } = props;

  useIsomorphicLayoutEffect(() => {
    revealTransition().then(() => {
      gsap.set(`.${pageTransitionClasses.root}`, {
        display: "none",
        zIndex: 0,
      });
      gsap.set(`.${pageTransitionClasses.block}`, { visibility: "hidden" });
    });
  }, []);

  return <>{children}</>;
}

export const pageTransitionRoute = (router: AppRouterInstance, href: Url) => {
  const pathname = window.location.pathname;
  const pathnamePagePath = pathname.split("?")[0].split("#")[0];
  const hrefStr = href.toString();
  const hrefPagePath = hrefStr.split("?")[0].split("#")[0];

  if (pathnamePagePath !== hrefPagePath) {
    animateTransition().then(() => {
      router.push(hrefStr);
    });
  } else {
    router.push(hrefStr);
  }
};

type Props = Omit<RootProps, "children">;

function PageTransition(props: Props) {
  return (
    <PageTransitionRoot className={pageTransitionClasses.root} {...props}>
      <PageTransitionRow
        className={clsx(
          pageTransitionClasses.row,
          pageTransitionClasses.firstRow
        )}
      >
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
      </PageTransitionRow>

      <PageTransitionRow
        className={clsx(
          pageTransitionClasses.row,
          pageTransitionClasses.secondRow
        )}
      >
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
        <PageTransitionBlock className={pageTransitionClasses.block} />
      </PageTransitionRow>
    </PageTransitionRoot>
  );
}

export default PageTransition;
