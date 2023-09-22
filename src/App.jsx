import { CssBaseline } from "@mui/material";
import AppBarMUI from "./components/AppBarMUI";
import ButtonMUI from "./components/ButtonMUI";
import ContainerMUI from "./components/ContainerMUI";
import LayoutMUI from "./components/LayoutMUI";
import MenuMUI from "./components/MenuMUI";
import { TextFieldMUI } from "./components/TextFieldMUI";
import TypographyMUI from "./components/TypographyMUI";

function App() {
  return (
    <>
      <CssBaseline />
      <AppBarMUI />
      <ContainerMUI />
      <LayoutMUI />
      <TypographyMUI />
      <ButtonMUI />
      <TextFieldMUI />
      <MenuMUI />
    </>
  );
}

export default App;
