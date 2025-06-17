import { Route, Switch } from "wouter";
import { ErrorBoundary } from "@/components/error-boundary.tsx";
import { AuthProvider } from "@/context/auth-provider.tsx";
import { lazy, Suspense } from "react";
import { PublicRoute } from "@/components/route-guards.tsx";
import { Spinner } from "@/components/spinner.tsx";
import { AuthLayout } from "@/layouts/auth-layout.tsx";

const Register = lazy(() => import("./pages/register.tsx"));
const Login = lazy(() => import("./pages/login.tsx"));

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Switch>
          <Route path="/">
            <div>Home</div>
          </Route>
          <Route path="/login">
            <AuthLayout>
              <PublicRoute>
                <Suspense fallback={<Spinner />}>
                  <Login />
                </Suspense>
              </PublicRoute>
            </AuthLayout>
          </Route>
          <Route path="/register">
            <AuthLayout>
              <PublicRoute>
                <Suspense fallback={<Spinner />}>
                  <Register />
                </Suspense>
              </PublicRoute>
            </AuthLayout>
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </AuthProvider>
    </ErrorBoundary>
  );
}
