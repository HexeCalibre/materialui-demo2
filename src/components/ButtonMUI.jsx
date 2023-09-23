import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendIcon from "@mui/icons-material/Send";

const ButtonMUI = () => {
  const [formats, setFormats] = useState([]);
  console.log(formats);

  const handleFormatChange = (event, value) => {
    setFormats(value);
  };

  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h5">Button</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="myCustomColor">
            My Custom Color
          </Button>

          {/* <Button variant="contained" color="myCustomColor">
          Custom Color
        </Button> */}
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
        </Stack>
        <Typography variant="h5">Icon Button</Typography>
        <Stack>
          <IconButton color="success" size="small" aria-label="send">
            <SendIcon />
          </IconButton>
        </Stack>
        <Typography variant="h5">Button Group</Typography>
        <Stack direction="row">
          <ButtonGroup
            variant="text"
            orientation="horizontal"
            size="small"
            color="secondary"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left clicked")}>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Typography variant="h5">Toggle Button</Typography>
        <Stack direction="row">
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormatChange}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default ButtonMUI;
