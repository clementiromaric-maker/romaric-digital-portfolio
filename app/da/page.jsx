import PortfolioPage from '../components/PortfolioPage';
import { content } from '../content';

export const metadata = {
  alternates: { canonical: '/da/', languages: { 'en': '/', 'da': '/da/' } }
};

export default function Page(){ return <PortfolioPage c={content.da} />; }
