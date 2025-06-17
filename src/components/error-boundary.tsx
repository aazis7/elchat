import {
  ErrorBoundary as ReactErrorBoundary,
  type FallbackProps,
} from "react-error-boundary";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert.tsx";
import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button.tsx";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      <div className="space-y-4 lg:space-y-6">
        <Alert variant="destructive">
          <AlertTitle className="text-xl lg:text-2xl font-bold tracking-tight flex gap-1 items-center">
            <AlertTriangle className="size-4 lg:size-6" />
            Something went wrong
          </AlertTitle>
          <AlertDescription className="tracking-tight [&:not:first-child(mt-6)]">
            {error.message ?? "An unexpected error has been occured."}
          </AlertDescription>
        </Alert>
        <Button onClick={resetErrorBoundary}>Try again</Button>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
