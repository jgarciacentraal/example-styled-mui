import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "@emotion/styled";

const BoxContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: props.column && "column"
}));

const options = [
  { id: 345344, age: 10, name: "julio" },
  { id: 35645, age: 20, name: "marco" },
  { id: 4365456, age: 30, name: "ana" }
];

export default function BasicSelect(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {options.map((o) => {
            return (
              <MenuItem key={o.id} value={o.age}>
                <BoxContainer column={props.column}>
                  <p>{o.age}</p>
                  <div>{o.name}</div>
                </BoxContainer>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
