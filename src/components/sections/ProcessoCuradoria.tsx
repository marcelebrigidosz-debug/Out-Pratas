/**
 * Processo de curadoria — tratado como parede de texto de exposição,
 * não como "3 features do produto". Números enormes (7xl), um item
 * por linha com muito espaço entre eles, título curto — o texto
 * descritivo é a menor coisa na composição, quase uma legenda.
 */
const steps = [
  {
    number: "01",
    title: "Intencional",
    text: "Cada peça entra por um motivo: forma, presença e significado.",
  },
  {
    number: "02",
    title: "Exclusiva",
    text: "A curadoria privilegia o que foge do óbvio — peças com identidade própria.",
  },
  {
    number: "03",
    title: "Atemporal",
    text: "Só fica o que atravessa o tempo bem, longe da tendência passageira.",
  },
];

export function ProcessoCuradoria() {
  return (
    <section className="atmosphere-moss relative overflow-hidden bg-moss-50 px-6 py-38 md:px-10">
      <p className="label mb-20 text-moss-700">Processo de curadoria</p>
      <div className="space-y-16 md:space-y-24">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-start gap-2 border-b border-moss-300/40 pb-16 last:border-none md:flex-row md:items-baseline md:gap-12 md:pb-24"
          >
            <span className="font-display text-6xl text-moss-500 md:text-7xl">{step.number}</span>
            <div>
              <h3 className="font-display text-2xl md:text-3xl">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-stone-700">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
