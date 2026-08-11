import PortfolioPage from '../components/PortfolioPage';
import { content } from '../content';

export const metadata = {
  alternates: { canonical: '/', languages: { 'en': '/', 'da': '/da/' } }
};

export default function Page(){ return <PortfolioPage c={content.en} />; }
