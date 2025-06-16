import { Route, Switch } from "wouter";
import { ErrorBoundary } from "@/components/error-boundary.tsx";

function MyError() {
  const isErr = false;
  if (!isErr) throw new Error("Test");

  return <div>MyError</div>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/">
          <div>Home</div>
        </Route>
        <Route path="/error">
          <MyError />
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}
