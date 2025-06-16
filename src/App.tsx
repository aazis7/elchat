import { Route, Switch } from "wouter";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <div>Home</div>
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}
