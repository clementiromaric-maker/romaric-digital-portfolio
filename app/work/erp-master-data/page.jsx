import CasePage from '../../components/CasePage';
import { cases } from '../../content';

export const metadata = {
  title: 'ERP, Master Data & Production Readiness Case | Romaric Clementi',
  description: 'Sanitised case showing how prototype and engineering-change input becomes reliable ERP data, material readiness, documentation and a controlled production handover.',
  alternates: { canonical: '/work/erp-master-data/', languages: { en: '/work/erp-master-data/', da: '/da/arbejde/erp-masterdata/' } },
};

export default function Page() { return <CasePage content={cases.erp.en} type="erp" />; }
