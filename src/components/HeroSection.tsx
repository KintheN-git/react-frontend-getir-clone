import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { phones } from "../constants/phoneCodes";
const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  return (
    <section className="relative h-[500px] w-full bg-gradient-to-r from-primary-brand-color to to-secondary-brand-color ">
      <div className="container px-[150px] mx-auto flex justify-between items-center h-full">
        <div className="flex flex-col items-start">
          <div className="h-[180px] w-[180px]">
            <img
              src="/src/assets/bimutluluk.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="font-semibold text-4xl text-white mt-10">
            Dakikalar içinde kapında
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-3">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="react-flags-select"
              />
              <label className="flex-1 relative">
                <input
                  required
                  type="number"
                  className="peer h-14 px-4 border-2 border-gray-200 rounded w-full outline-none focus:border-brand-color transition-all duration-500 hover:border-brand-color text-sm pt-2"
                />
                <span
                  className="flex absolute top-0 left-0 items-center h-full px-4 text-sm text-gray-500 transition-all 
                peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-brand-color
                peer-focus:h-7 peer-focus:text-xs peer-focus:text-primary-brand-color
                
              "
                >
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button
              className="w-full h-12 bg-brand-yellow text-primary-brand-color  rounded-md text-sm font-semibold
            hover:bg-primary-brand-color hover:text-brand-yellow transition-all
            "
            >
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
