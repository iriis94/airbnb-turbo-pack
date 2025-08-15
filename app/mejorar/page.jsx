export const metadata = { title: "Mejorar mi anuncio | Airbnb Turbo Pack" };

export default function FormPage() {
  const TALLY_URL = process.env.NEXT_PUBLIC_TALLY_URL || "https://tally.so/r/3Nj79N";
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Empecemos 🚀</h1>
        <p className="mt-2 text-neutral-700">
          Completa el formulario (5–7 min). Al final puedes pagar la señal o el total por Stripe.
        </p>

        {/* Tally embed */}
        <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-neutral-200 bg-white">
          <iframe
            src={TALLY_URL}
            width="100%"
            height="900"
            frameBorder="0"
            title="Formulario de intake"
          />
        </div>

        <p className="mt-4 text-sm text-neutral-500">
          Si tienes dudas, escríbeme por WhatsApp desde el botón del menú.
        </p>
      </section>
    </main>
  );
}
