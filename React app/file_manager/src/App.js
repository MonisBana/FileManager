import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/file_manager">
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
