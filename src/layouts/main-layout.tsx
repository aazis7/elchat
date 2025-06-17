export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <header></header>
      <main className="flex-1 max-w-4xl mx-auto p-4">{children}</main>
      <footer></footer>
    </div>
  );
}
