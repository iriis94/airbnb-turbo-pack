export const metadata = { title: "¡Gracias! | Airbnb Turbo Pack" };

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold">¡Pedido recibido! 🙌</h1>
        <p className="mt-3 text-neutral-700">
          Te he enviado un email con los siguientes pasos. Si pagaste la señal, el resto se abona a la entrega.
        </p>
        <a href="/" className="inline-flex mt-8 rounded-xl bg-neutral-900 px-5 py-3 text-white font-semibold">
          Volver a la web
        </a>
      </section>
    </main>
  );
}
