/** @jsxImportSource @emotion/react */

"use client";

import React from "react";
import { useTheme } from "@mui/material";

import { Tab, TabList, TabListBox, TabPanel, Tabs } from "@/_components/tabs";
import { InsightCard } from "@/_components/insight-card";
import { insightCard } from "@/dummyData";

import getInsightCollectionCss from "./getInsightCollectionCss";
import InsightCollectionPagination from "./InsightCollectionPagination";
import TopicInsightPage from "./TopicInsightPage";
import InsightSearchbar from "./InsightSearchbar";

export type InsightCollectionProps = Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
>;

function InsightCollection(props: InsightCollectionProps) {
  const theme = useTheme();
  const css = getInsightCollectionCss(theme);
  const [tabValue, setTabValue] = React.useState("all");

  const handleChangeTab = (_: any, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <section {...props}>
      <Tabs value={tabValue}>
        <div css={css.header}>
          <TabListBox borderColor="slate" css={css.tabListBox}>
            <TabList
              textColor="slate"
              indicatorColor="indigo"
              onChange={handleChangeTab}
            >
              <Tab label="All" value="all" />
              <Tab label="Design" value="design" />
              <Tab label="User Interface" value="user-interface" />
              <Tab label="User Experience" value="user-experience" />
            </TabList>
          </TabListBox>

          <div css={css.searchbar}>
            <InsightSearchbar />
          </div>
        </div>

        <TabPanel value="all">
          <TopicInsightPage>
            <InsightCard variant="base" {...insightCard} />
            <InsightCard variant="base" {...insightCard} />
            <InsightCard variant="base" {...insightCard} />
            <InsightCard variant="base" {...insightCard} />
          </TopicInsightPage>
        </TabPanel>
        <TabPanel value="design">Design</TabPanel>
        <TabPanel value="user-interface">User Interface</TabPanel>
        <TabPanel value="user-experience">User Experience</TabPanel>
      </Tabs>

      <InsightCollectionPagination />
    </section>
  );
}

export default InsightCollection;
