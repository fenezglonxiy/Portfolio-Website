import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";

function HeaderLetsTalk() {
  return (
    <div>
      <Button
        variant="outlined"
        iconPosition="end"
        icon={<ArrowRight size="sm" />}
      >
        Let's Talk
      </Button>
    </div>
  );
}

export default HeaderLetsTalk;
