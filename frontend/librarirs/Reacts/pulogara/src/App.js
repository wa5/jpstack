import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Apipage from './pages/Apipage';
function App() {
  return (
    <>
    <Router>
      <Switch >
<Route exact path="/">
<Home />
</Route>
</Switch>
    


<Switch >
<Route exact path="/login">
<Login />
</Route>
</Switch>



<Switch >
<Route exact path="/apiGet">
<Apipage/>
</Route>
</Switch>




    </Router>

</>
  );
}

export default App;
