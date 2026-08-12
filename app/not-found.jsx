export const metadata = {
  title: 'Page not found | Romaric Clementi',
  description: 'The requested portfolio page could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="wrap not-found-card">
        <p className="mono">404 · Page not found</p>
        <h1>This route is not part of the portfolio.</h1>
        <p>Return to the English or Danish portfolio.</p>
        <div className="not-found-actions">
          <a className="btn" href="/">English portfolio</a>
          <a className="btn btn--ghost" href="/da/">Dansk portfolio</a>
        </div>
      </div>
    </main>
  );
}
