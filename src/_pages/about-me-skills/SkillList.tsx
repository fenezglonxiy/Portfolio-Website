export type SkillListProps = React.ComponentPropsWithoutRef<"ul">;

function SkillList(props: SkillListProps) {
  return <ul {...props} />;
}

export default SkillList;
