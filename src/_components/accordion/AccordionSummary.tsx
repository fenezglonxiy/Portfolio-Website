import {
  AccordionSummary as MUIAccordionSummary,
  AccordionSummaryProps as MUIAccordionSummaryProps,
} from "@mui/material";

export type AccordionSummaryProps = MUIAccordionSummaryProps & {
  /**
   * Control the accordion summary id.
   * [spec](https://mui.com/material-ui/react-accordion/#accessibility)
   */
  id: string;

  /**
   * Control the accordion region id.
   * [spec](https://mui.com/material-ui/react-accordion/#accessibility)
   */
  "aria-controls": string;
};

function AccordionSummary(props: AccordionSummaryProps) {
  return <MUIAccordionSummary {...props} />;
}

export default AccordionSummary;
