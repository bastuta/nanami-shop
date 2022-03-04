import './App.css';
import { Route, Switch } from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';

function App() {
  return (
    <div className="App">
      <Header title="NANAMI SHOP" />
      <Switch>
        <Route path='/' exact>
          <Pay />
        </Route>
        <Route path='/success' exact>
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
