import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComingSoon from './components/ComingSoon';
import PageNotFound from './pages/404Page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ComingSoon">
          <ComingSoon />
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
