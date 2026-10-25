import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link to="/" className="text-primary underline text-sm">← Zpět na hlavní stránku</Link>
        <h1 className="font-heading text-4xl font-bold text-primary mt-6 mb-8">Obchodní podmínky</h1>
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">1. Úvodní ustanovení</h2>
            <p>Tyto obchodní podmínky upravují vztah mezi prodávajícím – MERAK, Argentinská 194/12, Praha 7, 170 00, IČO: 17645018 – a kupujícím při objednávce ručně vyráběných voňavých výrobků. Prodávající není právnickou osobou (s.r.o.), jedná se o samostatnou výdělečnou činnost fyzické osoby.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">2. Povaha výrobků</h2>
            <p>Nabízené výrobky jsou dekorativní voňavé výrobky určené výhradně jako voňavá dekorace interiéru, koupelen a obytných prostor. Každý kus je ručně vyráběný originál, drobné odchylky v barvě a tvaru jsou proto přirozenou součástí výrobku.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">3. Objednávka</h2>
            <p>Objednávku lze zaslat e-mailem na mydla.merak@email.cz. V objednávce uveďte název výrobku, počet kusů a výdejní místo Zásilkovny. Smlouva je uzavřena potvrzením objednávky e-mailem.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">4. Cena a platba</h2>
            <p>Ceny jsou uvedeny u jednotlivých výrobků v Kč. Platba probíhá převodem na účet 6007850013 / 0800, případně pomocí QR kódu uvedeného na webu.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">5. Dodání</h2>
            <p>Zboží odesíláme přes Zásilkovnu. Standardní doba výroby je 3–5 pracovních dnů, doručení obvykle 1–2 pracovní dny. Při objednávce nad 30 ks je doprava zdarma, jinak činí poplatek 79 Kč.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">6. Odstoupení od smlouvy a reklamace</h2>
            <p>Kupující má právo odstoupit od smlouvy do 14 dnů od převzetí zboží dle občanského zákoníku. Výjimku mohou tvořit výrobky vyrobené na míru dle přání kupujícího. Reklamace řešíme individuálně e-mailem.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">7. Závěrečná ustanovení</h2>
            <p>Tyto obchodní podmínky jsou platné od data zveřejnění na této webové stránce. Vztahy neupravené těmito podmínkami se řídí právním řádem České republiky.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
