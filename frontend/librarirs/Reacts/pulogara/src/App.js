import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Apipage from './pages/Apipage';
import InsertApi from './components/api/InsertApi';
import EditApi from './components/api/EditApi';
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

<InsertApi />
</Route>
</Switch>

<Switch >
<Route exact path="/allApiCalls">
<EditApi/>
</Route>
</Switch>



    </Router>

</>
  );
}

export default App;
