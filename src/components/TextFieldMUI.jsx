import {
  Stack,
  TextField,
  Box,
  Typography,
  InputAdornment,
} from "@mui/material";

import React, { useState } from "react";

export const TextFieldMUI = () => {
  const [text, setText] = useState("");

  return (
    <Box>
      <Typography variant="h5">TextField</Typography>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Name" size="small" color="secondary" />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField label="Text Input" required />
          <TextField label="Text Input" helperText="Enter text here" />
          <TextField label="Password" type="password" required />
          <TextField label="Disabled" disabled />
          <TextField label="Read Only" InputProps={{ readOnly: true }} />
          <TextField label="Error" error />
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Payment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Height"
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Text Input"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          error={!text}
          helperText={!text ? "This field is required" : ""}
        />
      </Stack>
    </Box>
  );
};
