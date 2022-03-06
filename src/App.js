import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/jsjsj">
          <h1>ajahahh</h1>
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
