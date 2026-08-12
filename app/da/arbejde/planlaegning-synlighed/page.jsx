import CasePage from '../../../components/CasePage';
import { cases } from '../../../content';

export const metadata = {
  title: 'Indkøb og leverandørbeslutninger | Romaric Clementi',
  description: 'Anonymiseret case om, hvordan leverandørresultater, kommercielle vilkår, sourcingrisici, ERP-data og ansvar samles i et klart beslutningsgrundlag.',
  alternates: { canonical: '/da/arbejde/planlaegning-synlighed/', languages: { en: '/work/planning-visibility/', da: '/da/arbejde/planlaegning-synlighed/' } },
};

export default function Page() { return <CasePage content={cases.planning.da} type="planning" />; }
