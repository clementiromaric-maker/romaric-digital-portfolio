import CasePage from '../../components/CasePage';
import { cases } from '../../content';

export const metadata = {
  title: 'Procurement & Supplier Decision Case | Romaric Clementi',
  description: 'Sanitised case showing how supplier performance, commercial terms, sourcing risks, ERP data and ownership are brought together in a clear procurement decision view.',
  alternates: { canonical: '/work/planning-visibility/', languages: { en: '/work/planning-visibility/', da: '/da/arbejde/planlaegning-synlighed/' } },
};

export default function Page() { return <CasePage content={cases.planning.en} type="planning" />; }
