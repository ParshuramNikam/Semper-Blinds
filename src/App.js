import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuotationTool from './components/QuotationTool';
import { Tool } from './components/quotation-tool/Tool';
import QuotationFormNew from './components/quotation-tool/QuotationFormNew'; 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/QuotationTool">
          <QuotationTool />
          {/* <Tool></Tool> */}
        </Route>
        <Route exact path="*">
          <h1>404 Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
