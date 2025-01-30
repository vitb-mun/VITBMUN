export default function banner() {
  const cards = [
    { id: "card1", bg: 'bg-[url("./assets/Collabrations/irmun.jpg")]' },
    { id: "card2", bg: 'bg-[url("./assets/Collabrations/iitkgp.jpg")]' },
    { id: "card3", bg: 'bg-[url("./assets/Collabrations/iitj.jpg")]' },
  ];

  return (
    <>
    <div container mx-auto flex px-4>
    <h1
          className="text-4xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
          style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          id="collaborations"
        >
          Our Collaborations
        </h1>
    </div>
    <div className="container mx-auto flex px-4 justify-center items-center">

      <div className="w-full sm:w-[50%]">
        <ul className="list-none grid grid-cols-1 gap-[4vw] pb-[calc(4*1.5em)]">
          {cards.map((card, index) => (
            <li
              key={card.id}
              className={`sticky top-0 pt-[${(index + 1) * 1.5}em]`}
            >
              <div
                className={`rounded-[30px] sm:rounded-[50px] shadow-lg h-[90vw] sm:h-[70vh] transition-all duration-500 ${card.bg} bg-cover bg-no-repeat`}
              >
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    </>
  );
}
