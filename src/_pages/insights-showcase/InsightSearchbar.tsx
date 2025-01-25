import { TextField } from "@/_components/form";

function InsightSearchbar() {
  return (
    <TextField
      label="Search insight"
      placeholder="Search insight"
      variant="outlined"
      color="indigo"
      endAdornment={
        <span>
          <i className="fa-regular fa-magnifying-glass"></i>
        </span>
      }
      hiddenLabel
      optional
      fullWidth
    />
  );
}

export default InsightSearchbar;
