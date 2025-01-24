import { WorkShowcaseCardProps } from "./WorkShowcaseCard";
import WorkShowcaseCardContentBox from "./WorkShowcaseCardContentBox";
import WorkShowcaseCardContentBoxTitle from "./WorkShowcaseCardContentBoxTitle";
import WorkShowcaseCardWorkService from "./WorkShowcaseCardWorkService";

export type WorkShowcaseCardWorkServicesProps =
  React.ComponentPropsWithoutRef<"div"> & {
    services: WorkShowcaseCardProps["workServices"];
    children?: undefined | null;
  };

function WorkShowcaseCardWorkServices(
  props: WorkShowcaseCardWorkServicesProps
) {
  const { services, ...rest } = props;

  return (
    <WorkShowcaseCardContentBox verticalSpacing={2} {...rest}>
      <WorkShowcaseCardContentBoxTitle>
        Services
      </WorkShowcaseCardContentBoxTitle>

      <WorkShowcaseCardContentBox horizontalSpacing={2}>
        {services.map((service, idx) => (
          <WorkShowcaseCardWorkService key={idx} label={service} />
        ))}
      </WorkShowcaseCardContentBox>
    </WorkShowcaseCardContentBox>
  );
}

export default WorkShowcaseCardWorkServices;
