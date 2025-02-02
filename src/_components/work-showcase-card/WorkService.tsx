import { Chip, ChipProps } from "@/_components/chip";

export type WorkServiceProps = ChipProps;

function WorkService(props: WorkServiceProps) {
  return <Chip {...props} />;
}

export default WorkService;
