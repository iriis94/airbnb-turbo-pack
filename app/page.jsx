const TALLY_URL = process.env.NEXT_PUBLIC_TALLY_URL || "https://tally.so/r/REPLACE_ME";
const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/34XXXXXXXXX?text=Hola%20vengo%20de%20la%20web%20y%20quiero%20mejorar%20mi%20anuncio%20😊";

export default function Page() {
  const features = [
    {
      title: "AMOR TE AMO",
      desc: "3 títulos + 2 descripciones optimizadas y 15–25 FAQs personalizadas.",
    },
    {
      title: "Guía del huésped",
      desc: "Plantilla Notion lista con check-in, recomendaciones y emergencias.",
    },
    {
      title: "Cartelería lista",
      desc: "6 láminas A4 en Canva (WiFi, normas, reciclaje, checkout, etc.) con QR.",
    },
    {
      title: "Mensajes automáticos",
      desc: "Plantillas para pre-reserva, llegada, mitad de estancia y reseñas.",
    },
  ];

  const faqs = [
    {
      q: "¿De verdad está listo en 72h?",
      a: "Sí. Trabajamos con plantillas y un proceso afinado. Si faltan fotos o datos, el reloj se pausa hasta recibirlos.",
    },
    {
      q: "¿Necesitas acceso a mi cuenta de Airbnb?",
      a: "No. Te entrego textos y guía; tú los pegas. Si quieres acompañamiento, el plan Concierge lo cubre.",
    },
    {
      q: "¿Garantizas más reservas?",
      a: "No prometemos porcentajes. Sí garantizamos claridad, mejor experiencia y materiales profesionales.",
    },
    {
      q: "¿Cómo pago?",
      a: "Stripe con tarjeta. Puedes hacer depósito del 50% en el formulario y el resto a la entrega.",
    },
    {
      q: "¿Y si no me gusta?",
      a: "Incluye 1 iteración ligera en Starter. El plan Pro añade una revisión completa a 30 días.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-sky-100 to-emerald-100" />
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm shadow-sm ring-1 ring-black/5">
                <span>⚡</span> Entrega exprés en 72h
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Convierte tu anuncio en una máquina de <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">5★</span>
              </h1>
              <p className="mt-4 text-lg text-neutral-700">
                Optimizo tu listing, creo tu guía del huésped y preparo cartelería editable. Menos dudas, mejores reseñas y más conversión. Sin dramas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TALLY_URL} className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-white font-semibold shadow hover:bg-neutral-800 active:scale-[.99]">
                  Mejorar mi anuncio
                </a>
                <a href={WHATSAPP_URL} className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold shadow ring-1 ring-neutral-200 hover:bg-neutral-50">
                  Hablar por WhatsApp
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2"><span>✅</span> Plantillas editables</div>
                <div className="flex items-center gap-2"><span>🔒</span> Pago seguro con Stripe</div>
                <div className="flex items-center gap-2"><span>🇪🇸</span> Español nativo</div>
              </div>
            </div>
            <div className="md:pl-10">
              <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5">
                <div className="text-sm font-semibold text-neutral-500">Antes / Después</div>
                <div className="mt-3 grid grid-cols-1 gap-4">
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <div className="text-xs uppercase tracking-wide text-neutral-500">Antes</div>
                    <p className="mt-1 font-semibold">Apartamento en el centro</p>
                    <p className="text-sm text-neutral-600">Bonito apartamento con todo lo necesario. Cerca de todo.</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4 bg-gradient-to-br from-white to-neutral-50">
                    <div className="text-xs uppercase tracking-wide text-neutral-500">Después</div>
                    <p className="mt-1 font-semibold">Luminoso 2D en Malasaña con balcón • WiFi 600Mb • Check-in 24/7</p>
                    <p className="text-sm text-neutral-600">A 4 min del metro Tribunal. AC silencioso, smart TV, cocina equipada y mesa de trabajo. Ideal parejas/teletrabajo.</p>
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-500">Ejemplo ficticio para mostrar el tipo de mejora.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">El problema</h2>
            <p className="mt-3 text-neutral-700">
              Títulos genéricos, fotos sin orden, normas confusas y mensajes improvisados. Resultado: menos reservas y reseñas tibias.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">La solución</h2>
            <p className="mt-3 text-neutral-700">
              Un pack compacto con copy que convierte, guía del huésped bonita y cartelería lista para imprimir. Lo esencial, bien hecho y rápido.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="text-xl font-semibold">{f.title}</div>
              <p className="mt-2 text-neutral-700 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Cómo funciona</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {["Reserva", "Cuestionario", "Producción", "Entrega"].map((step, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="flex items-center gap-2 text-sm text-neutral-500">Paso {i + 1}</div>
              <div className="mt-2 text-lg font-semibold">{step}</div>
              <p className="mt-2 text-sm text-neutral-700">
                {i === 0 && "Elige pack y paga (o deja señal)."}
                {i === 1 && "Completa Tally con datos, reglas y enlaces."}
                {i === 2 && "Optimización de copy, guía y cartelería."}
                {i === 3 && "PDF + enlaces editables + vídeo Loom en 72h."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Planes simples y claros</h2>
        <p className="mt-2 text-neutral-700">Empieza con Starter y sube cuando te encaje.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 flex flex-col">
            <div className="text-sm font-semibold text-neutral-500">Starter</div>
            <div className="mt-2 text-3xl font-extrabold">149€</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>✓ Auditoría + informe</li>
              <li>✓ 3 títulos + 2 descripciones</li>
              <li>✓ 15–25 FAQs</li>
              <li>✓ Orden de fotos + 10 captions</li>
              <li>✓ Guía del huésped (Notion)</li>
              <li>✓ 6 carteles (Canva) con QR</li>
              <li>✓ Plantillas de mensajes</li>
              <li>✓ 1 iteración ligera</li>
            </ul>
            <a href={TALLY_URL} className="mt-6 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-white font-semibold shadow hover:bg-neutral-800">Elegir Starter</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-3xl bg-neutral-900 p-6 text-white shadow-lg">
            <div className="absolute -top-3 right-6 rounded-full bg-white text-neutral-900 text-xs font-bold px-3 py-1 shadow">Más popular</div>
            <div className="text-sm font-semibold text-neutral-200">Pro (hasta 2 anuncios)</div>
            <div className="mt-2 text-3xl font-extrabold">299€</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-100">
              <li>✓ Todo lo del Starter ×2</li>
              <li>✓ Respuestas tipo para imprevistos</li>
              <li>✓ Revisión completa a 30 días</li>
            </ul>
            <a href={TALLY_URL} className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-neutral-900 font-semibold shadow hover:bg-neutral-100">Elegir Pro</a>
          </div>

          {/* Concierge */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 flex flex-col">
            <div className="text-sm font-semibold text-neutral-500">Concierge</div>
            <div className="mt-2 text-3xl font-extrabold">499€</div>
            <div className="text-sm text-neutral-500">setup + 79€/mes</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>✓ Todo Pro</li>
              <li>✓ Ajustes mensuales</li>
              <li>✓ Informe ligero</li>
            </ul>
            <a href={WHATSAPP_URL} className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold shadow ring-1 ring-neutral-200 hover:bg-neutral-50">Hablar del Concierge</a>
          </div>
        </div>
        <p className="mt-4 text-xs text-neutral-500">*Precios con IVA no incluido. Servicio de consultoría/entregables; no gestionamos precios ni reservas.</p>
      </section>

      {/* Proof / Logos placeholder */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200">
          <h3 className="text-xl font-semibold">Lo que dicen (placeholder)</h3>
          <p className="mt-2 text-neutral-700 text-sm">Añade aquí 2–3 testimonios con impacto + capturas de antes/después reales cuando tengas los primeros clientes.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-neutral-700 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold">¿List@ para subir a 5★?</h2>
          <p className="mt-2 text-white/90">Lo dejamos listo en 72h si tienes las fotos y datos a mano. Clic y arrancamos.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={TALLY_URL} className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-neutral-900 font-semibold shadow hover:bg-neutral-100">Mejorar mi anuncio</a>
            <a href={WHATSAPP_URL} className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/30 hover:bg-white/5">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div className="text-sm text-neutral-600">© {new Date().getFullYear()} Airbnb Turbo Pack. Todos los derechos reservados.</div>
          <div className="text-sm text-neutral-600">Aviso legal · Privacidad · Condiciones</div>
        </div>
      </footer>
    </main>
  );
}
