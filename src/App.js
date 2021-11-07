import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/dashboard" component={ Dashboard }/>
    </Switch>
  );
}

export default App;
