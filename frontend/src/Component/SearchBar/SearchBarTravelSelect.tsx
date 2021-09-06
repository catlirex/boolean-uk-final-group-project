import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function SimpleSelect() {
  const classes = useStyles();
  const [travelClass, settravelClass] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    settravelClass(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" color="secondary">
          Travel Class
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="secondary"
          value={travelClass}
          onChange={handleChange}
        >
          <MenuItem value={"econ"}>Economy</MenuItem>
          <MenuItem value={"business"}>Business</MenuItem>
          <MenuItem value={"firstClass"}>First Class</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
