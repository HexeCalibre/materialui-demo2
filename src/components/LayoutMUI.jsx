import React from "react";
import { Box, Stack, Button } from "@mui/material";

const LayoutMUI = () => {
  return (
    <>
      <Box sx={{ background: "blue" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          aspernatur quisquam sit esse nostrum inventore nam error vitae impedit
          odio. Ullam neque necessitatibus dignissimos repellendus mollitia vero
          natus nemo quia eius labore? Quibusdam accusantium, architecto ab
          asperiores similique autem iusto possimus nemo ipsa commodi
          praesentium! Dolore molestiae explicabo totam vel.
        </p>
      </Box>

      <Stack direction="column" alignItems="flex-center">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Stack>
    </>
  );
};

export default LayoutMUI;
