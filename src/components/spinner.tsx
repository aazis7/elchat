export function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div className="flex space-x-1">
        <div className="size-4 bg-muted-foreground rounded-full animate-pulse"></div>
        <div className="size-4 bg-muted-foreground rounded-full animate-pulse delay-75"></div>
        <div className="size-4 bg-muted-foreground rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
}
