import {BrowserRouter} from "react-router-dom";
import MainComponent from "./components/mainComponent/MainComponent";
import {HashRouter} from "react-router-dom";



function App() {
  return (

              <HashRouter basename={process.env.PUBLIC_URL}>
                  <MainComponent/>
              </HashRouter>

  );
}

export default App;
