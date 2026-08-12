import CasePage from '../../../components/CasePage';
import { cases } from '../../../content';

export const metadata = {
  title: 'ERP, stamdata og produktionsparathed | Romaric Clementi',
  description: 'Anonymiseret case om, hvordan prototype- og ændringsinput bliver til pålidelige ERP-data, materialeparathed, dokumentation og kontrolleret overdragelse til produktionen.',
  alternates: { canonical: '/da/arbejde/erp-masterdata/', languages: { en: '/work/erp-master-data/', da: '/da/arbejde/erp-masterdata/' } },
};

export default function Page() { return <CasePage content={cases.erp.da} type="erp" />; }
