import { Provider } from "react-redux";
import "./App.css";
import { Counter } from "./components/counter";
import store from "./components/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
