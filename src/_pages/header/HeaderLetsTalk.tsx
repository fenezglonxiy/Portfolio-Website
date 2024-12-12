import { Button } from "@/_components/Button";
import { ArrowRightIcon } from "@/_icons";

function HeaderLetsTalk() {
  return (
    <div>
      <Button
        variant="outlined"
        iconPosition="end"
        icon={<ArrowRightIcon size="sm" />}
      >
        Let's Talk
      </Button>
    </div>
  );
}

export default HeaderLetsTalk;
