import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styled from "@emotion/styled";

const BoxContainer = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px"
}));

const SelectStyled = styled(Select)({
  display: "flex",
  justifyContent: "space-around"
});

const options = [
  { id: 345344, age: 10, name: "joe" },
  { id: 35645, age: 20, name: "steve" },
  { id: 4365456, age: 30, name: "michael" }
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
        <SelectStyled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age.age}
          label="Age"
          onChange={handleChange}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.id} value={option}>
                <BoxContainer column={props.column}>
                  <p>{option.age}</p>
                  <p>{option.name}</p>
                </BoxContainer>
              </MenuItem>
            );
          })}
        </SelectStyled>
      </FormControl>
    </Box>
  );
}
