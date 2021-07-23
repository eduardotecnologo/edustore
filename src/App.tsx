import { BrowserRouter, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

 function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/store" component={Store}/>
    </BrowserRouter>
  );
}

export default App;
