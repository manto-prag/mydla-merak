import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/" className="text-primary underline text-sm">← Zpět na hlavní stránku</Link>
        <h1 className="font-heading text-4xl font-bold text-primary mt-6 mb-8">Ochrana osobních údajů</h1>
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">1. Správce údajů</h2>
            <p>Správcem osobních údajů je MERAK, Argentinská 194/12, Praha 7, 170 00, IČO: 17645018, e-mail: mydla.merak@email.cz.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">2. Jaké údaje zpracováváme</h2>
            <p>Zpracováváme pouze údaje, které nám sami poskytnete při objednávce e-mailem: jméno, e-mailovou adresu a údaje potřebné k doručení (výdejní místo Zásilkovny, případně doručovací adresu).</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">3. Účel zpracování</h2>
            <p>Osobní údaje používáme výhradně k vyřízení vaší objednávky, komunikaci s vámi a plnění zákonných povinností (účetnictví). Údaje nikomu dále neposkytujeme ani neprodáváme.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">4. Doba uchování</h2>
            <p>Údaje uchováváme po dobu nezbytnou pro vyřízení objednávky a po dobu stanovenou právními předpisy (zejména účetními).</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">5. Vaše práva</h2>
            <p>Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování a právo podat stížnost u Úřadu pro ochranu osobních údajů. Pro uplatnění práv nás kontaktujte na mydla.merak@email.cz.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">6. Cookies</h2>
            <p>Web používá pouze nezbytné technické cookies potřebné k fungování stránky (např. zapamatování souhlasu s cookies). Nepoužíváme analytické ani marketingové cookies třetích stran.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
