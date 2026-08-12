import CasePage from '../../../components/CasePage';
import { cases } from '../../../content';

export const metadata = {
  title: 'Kildegrundlag og kunderejse | Romaric Clementi',
  description: 'Reel tosproget implementering af tydelige ydelser, booking, politikker, anmeldelser og ejerstyret information.',
  alternates: { canonical: '/da/arbejde/kildegrundlag/', languages: { en: '/work/source-of-truth/', da: '/da/arbejde/kildegrundlag/' } },
};

export default function Page() { return <CasePage content={cases.source.da} type="source" />; }
