import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <div className="container">
      <AppProvider>
        <Home />
        
      </AppProvider>
    </div>
  );
}

export default App;
