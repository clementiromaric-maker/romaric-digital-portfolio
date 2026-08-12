export const metadata = { title: 'Page not found | Romaric Clementi', robots: { index: false, follow: false } };
export default function NotFound() {
  return <main className="not-found"><div><span>404</span><h1>This record is not available.</h1><p>The page may have moved or the route may be incomplete.</p><a className="button" href="/">Return to portfolio</a></div></main>;
}
