import { useEffect, useState } from "react";
import cards from "../api/infoCards.json";

interface InfoCard {
  id: number;
  image: string;
  title: string;
  description: string;
}
const InfoCardSection = () => {
  const [infoCards, setInfoCards] = useState<InfoCard[]>([]);
  useEffect(() => {
    setInfoCards(cards);
  }, []);

  return (
    <section className="container mx-auto px-[150px] my-6">
      <div className="grid grid-cols-3 gap-4">
        {infoCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-center items-center pt-14 px-4 pb-10 bg-white  shadow-md"
          >
            <div className="w-[150px] h-[150px]">
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-6">
              <h3 className="text-lg font-semibold text-primary-brand-color">
                {card.title}
              </h3>
              <p className="text-gray-storm font-normal text-[15px] mt-2">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCardSection;
