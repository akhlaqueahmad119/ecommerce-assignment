import "./App.scss";
import Router from "./Router";
import AppHeader from "./component/header";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="layout">
        <Router />
      </div>
    </div>
  );
}

export default App;
