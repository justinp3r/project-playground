import { ThemeProvider } from "@emotion/react";
import HeaderBar from "./components/AppBar";
import { themeJustin } from "./theme";

function App() {
  return (
    <ThemeProvider theme={themeJustin}>
      <HeaderBar />;
    </ThemeProvider>
  );
}

export default App;
