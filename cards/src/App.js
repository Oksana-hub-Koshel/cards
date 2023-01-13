import {BrowserRouter} from "react-router-dom";
import MainComponent from "./components/mainComponent/MainComponent";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

function App() {
  return (

              <BrowserRouter>
                  <MainComponent/>
              </BrowserRouter>

  );
}

export default App;
