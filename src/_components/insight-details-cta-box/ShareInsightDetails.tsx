"use client";

import React from "react";
import { ClickAwayListener } from "@mui/material";

import { IconButton } from "@/_components/icon-button";
import { Popper } from "@/_components/popper";
import usePopperState, {
  bindPopper,
  bindTrigger,
} from "@/_hooks/usePopperState";
import { Paper } from "@/_components/paper";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@/_components/list";
import { Typography } from "@/_components/Typography";
import { Tooltip } from "@/_components/tooltip";

export type ShareInsightDetailsProps = React.ComponentPropsWithoutRef<"div">;

function ShareInsightDetails(props: ShareInsightDetailsProps) {
  const popperState = usePopperState();

  return (
    <ClickAwayListener onClickAway={popperState.close}>
      <div {...props}>
        <Tooltip title="Share" placement="top" trigger="onHover" arrow>
          <IconButton {...bindTrigger(popperState)}>
            <i className="fa-light fa-arrow-up-from-square"></i>
          </IconButton>
        </Tooltip>

        <Popper {...bindPopper(popperState)} placement="bottom" arrow>
          <Paper elevation={0}>
            <nav>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <i className="fa-regular fa-link"></i>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="caption"
                        fontWeight="semi-bold"
                        color="inherit"
                      >
                        Copy link
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Popper>
      </div>
    </ClickAwayListener>
  );
}

export default ShareInsightDetails;
