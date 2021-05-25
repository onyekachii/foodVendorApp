import './App.css';
import Home from "./home_page/home";
import Login from "./login_page/login"
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component= {Home} />
        <Route path="/login" component= { Login } />
      </Switch>
    </div>
  );
}

export default App;
