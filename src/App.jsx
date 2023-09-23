import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppBarMUI from "./components/AppBarMUI";
import ButtonMUI from "./components/ButtonMUI";
import ContainerMUI from "./components/ContainerMUI";
import LayoutMUI from "./components/LayoutMUI";
import MenuMUI from "./components/MenuMUI";
import { TextFieldMUI } from "./components/TextFieldMUI";
import TypographyMUI from "./components/TypographyMUI";
import GridMUI from "./components/GridMUI";
import StyleMUI from "./components/StyleMUI";
import { Palette } from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: green[500],
      },
      myCustomColor: {
        main: red[900],
        light: red[200],
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarMUI />
        <ContainerMUI />
        <LayoutMUI />
        <TypographyMUI />
        <ButtonMUI />
        <TextFieldMUI />
        <MenuMUI />
        <GridMUI />
        <StyleMUI />
      </ThemeProvider>
    </>
  );
}

export default App;
