import Link from 'next/link';
export default function MarziehCase({ da=false }) {
  const t = da ? {
    back:'Tilbage til portfolio', eyebrow:'Case · Live virksomhedssite', title:'Marzieh Nail Atelier', intro:'Fra spredt serviceinformation til en rolig, tosproget kunderejse.',
    contextH:'Kontekst', context:'Et privat negleatelier i Valby havde stærkt fagligt arbejde og en tydelig æstetik, men information om ydelser, priser, politikker, besøg og booking skulle samles i én overskuelig digital oplevelse.',
    roleH:'Min rolle', role:'Jeg arbejdede med brief, struktur, indhold, kunderejse, responsiv QA, udgivelse og overdragelse. AI-værktøjer hjalp med research, udkast og kodeassistance; jeg tog de endelige beslutninger og havde ansvaret for QA og levering.',
    tensionH:'Den vigtigste afvejning', tension:'Sitet skulle føles eksklusivt og roligt, men kunderne måtte ikke lede efter praktiske oplysninger. Derfor blev den visuelle stil holdt tilbage, mens ydelser, priser, politikker, besøg og booking blev gjort bevidst lette at finde.',
    decisionsH:'Vigtige beslutninger', decisions:[['Gør tilbuddet tydeligt','Ydelser, priser og forskelle mellem behandlinger blev struktureret, så kunden kan forstå valget før booking.'],['Skab tillid før handling','FAQ, politikker, lokal information og forventningsafstemning blev placeret dér, hvor de støtter beslutningen.'],['Hold sprogene på linje','Danske og engelske sider blev behandlet som to vedligeholdte ruter, ikke som en eftertanke.'],['Bevar ejerens kontrol','Strukturen, links og overdragelsesnoter gør det lettere at rette indhold uden at ændre hele sitet.']],
    deliveredH:'Leveret', delivered:'Live EN/DA-website med forside, ydelser og priser, arbejde/galleri, brudeindhold, FAQ, politikker, besøg, bookinglinks, metadata og mobilvenlig navigation.',
    qaH:'Implementering og QA', qa:'Responsivt layout, interne links, mobile kontroller, sprogparitet, metadata, strukturerede data hvor relevant, GitHub-kilde og Cloudflare-udgivelse.',
    previewAlt:'Visning af Marzieh Nail Ateliers forside', live:'Åbn live website ↗'
  } : {
    back:'Back to portfolio', eyebrow:'Case study · Live business website', title:'Marzieh Nail Atelier', intro:'From scattered service information to a calm bilingual customer journey.',
    contextH:'Context', context:'A private nail atelier in Valby already had strong craft and a clear aesthetic, but service, pricing, policy, visit and booking information needed one coherent digital experience.',
    roleH:'My role', role:'I worked across the brief, structure, content, customer journey, responsive QA, deployment and handover. AI tools supported research, drafting and code assistance; I made the final decisions and remained responsible for QA and delivery.',
    tensionH:'The key trade-off', tension:'The site needed to feel premium and calm without making clients hunt for practical information. I kept the visual language restrained while making services, prices, policies, visit details and booking deliberately easy to find.',
    decisionsH:'Key decisions', decisions:[['Clarify the offer','Services, prices and treatment differences were structured so clients could understand the choice before booking.'],['Build trust before action','FAQ, policies, local information and expectation-setting were placed where they support the booking decision.'],['Keep both languages aligned','Danish and English were treated as maintained routes, not a translation added at the end.'],['Leave the owner in control','The structure, links and handover notes make future updates possible without rethinking the whole site.']],
    deliveredH:'Delivered', delivered:'Live EN/DA website with home, services and pricing, work/gallery, bridal content, FAQ, policies, visit details, booking links, metadata and mobile-ready navigation.',
    qaH:'Implementation and QA', qa:'Responsive layout, internal links, mobile checks, language parity, metadata, structured-data awareness, GitHub source and Cloudflare deployment.',
    previewAlt:'Marzieh Nail Atelier homepage interface preview', live:'Visit live website ↗'
  };
  const home = da ? '/da/' : '/';
  const liveHref = da ? 'https://marziehnail-atelier.dk/' : 'https://marziehnail-atelier.dk/en/';
  return <main className="casePage"><div className="wrap">
    <div className="caseTop"><Link className="back" href={home}>← {t.back}</Link><div className="languageSwitch" aria-label={da ? 'Sprogvalg' : 'Language switcher'}><a className={!da ? 'active' : ''} href="/work/marzieh-nail-atelier/">EN</a><span>/</span><a className={da ? 'active' : ''} href="/da/work/marzieh-nail-atelier/">DA</a></div></div>
    <div className="caseHero"><div><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="lede">{t.intro}</p></div><img src="/assets/marzieh-homepage.webp" alt={t.previewAlt}/></div>
    <div className="caseFacts"><article><h2>{t.contextH}</h2><p>{t.context}</p></article><article><h2>{t.roleH}</h2><p>{t.role}</p></article></div>
    <article className="tradeoff"><p className="eyebrow">{t.tensionH}</p><p>{t.tension}</p></article>
    <section><div className="sectionHead"><p className="eyebrow">{t.decisionsH}</p></div><div className="decisionGrid">{t.decisions.map(([h,p],i)=><article key={h}><span className="num">0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></section>
    <div className="caseFacts bottom"><article><h2>{t.deliveredH}</h2><p>{t.delivered}</p></article><article><h2>{t.qaH}</h2><p>{t.qa}</p></article></div>
    <div className="actions"><a className="btn" href={liveHref} target="_blank" rel="noopener">{t.live}</a></div>
  </div></main>
}
