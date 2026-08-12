import CasePage from '../../components/CasePage';
import { cases } from '../../content';

export const metadata = {
  title: 'Source-of-Truth Implementation Case | Romaric Clementi',
  description: 'A live bilingual implementation showing how services, booking, policies, reviews and owner-controlled information become one coherent customer journey.',
  alternates: { canonical: '/work/source-of-truth/', languages: { en: '/work/source-of-truth/', da: '/da/arbejde/kildegrundlag/' } },
};

export default function Page() { return <CasePage content={cases.source.en} type="source" />; }
