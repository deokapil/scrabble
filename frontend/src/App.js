import "./App.css";
import Login from "./pages/Login";
import UserStore from "./store/userStore";
import Scrabble from "./pages/Scrabble";
import { observer } from "mobx-react";

const App = observer(() => {
  return (
    <div className="App">
      {UserStore.isAuthenticated ? <Scrabble /> : <Scrabble />}
    </div>
  );
});

export default App;
