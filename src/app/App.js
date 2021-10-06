import NavBar from "../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Posts from "../components/Posts";
import Dashboard from "../components/Dashboard";
import NotFound from "../components/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <h3>My Blog</h3>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/posts/:postId?' component={Posts} />
        <Route path='/404' component={NotFound} />
        <Redirect from='/admin' to='/dashboard' />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
