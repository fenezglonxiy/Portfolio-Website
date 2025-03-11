import { ListItem } from "@/_components/list";

type Props = React.ComponentPropsWithoutRef<"li">;

function SkillListItem(props: Props) {
  return <ListItem disablePadding {...props} />;
}

export default SkillListItem;
