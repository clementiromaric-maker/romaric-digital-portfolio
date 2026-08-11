import Link from 'next/link';
export default function NotFound(){ return <main className="casePage"><div className="wrap"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you requested does not exist.</p><div className="actions"><Link className="btn" href="/">Back to portfolio</Link></div></div></main>; }
