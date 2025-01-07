import { Provider } from "react-redux";
import "./App.css";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Habit Tracker</h1>
      </div>
    </Provider>
  );
}

export default App;
