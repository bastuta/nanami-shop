import './App.css';
import { Route, Switch } from 'react-router-dom';
import Pay from './Pay';
import Success from './Success';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/pay'>
          <Pay />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
