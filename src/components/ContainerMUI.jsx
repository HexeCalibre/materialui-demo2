import { Container } from "@mui/material";
import React from "react";

const ContainerMUI = () => {
  return (
    <>
      <Container sx={{ bgcolor: "green" }}>
        <h1>Default Container</h1>
      </Container>

      <Container maxWidth="xs" sx={{ bgcolor: "green" }}>
        <h1>xs Container</h1>
      </Container>

      <Container maxWidth="sm" sx={{ bgcolor: "green" }}>
        <h1>sm Container</h1>
      </Container>

      <Container maxWidth="md" sx={{ bgcolor: "green" }}>
        <h1>md Container</h1>
      </Container>

      <Container maxWidth="lg" sx={{ bgcolor: "green" }}>
        <h1>lg Container</h1>
      </Container>

      <Container maxWidth="xl" sx={{ bgcolor: "green" }}>
        <h1>xl Container</h1>
      </Container>

      <Container fixed sx={{ bgcolor: "green" }}>
        <h1>fixed Container</h1>
      </Container>
    </>
  );
};

export default ContainerMUI;
