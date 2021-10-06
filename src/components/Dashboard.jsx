import React from "react";
import Stats from "./Stats";
import Edit from "./Edit";
import { Switch, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/dashboard/edit'>Edit</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/dashboard' component={Stats} />
        <Route path='/dashboard/edit' component={Edit} />
      </Switch>
    </div>
  );
};

export default Dashboard;
