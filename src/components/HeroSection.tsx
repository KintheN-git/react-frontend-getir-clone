import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { phones } from "../constants/phoneCodes";
import { TiLocation } from "react-icons/ti";
import { IoChevronForwardOutline } from "react-icons/io5";
const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  return (
    <section className="relative md:h-[500px] w-full bg-gradient-to-r from-primary-brand-color to to-secondary-brand-color ">
      <div className="md:container mx-auto flex justify-between items-center h-full">
        <div className="hidden flex-col items-start md:flex">
          <div className="h-[180px] w-[180px]">
            <img
              src="../assets/bimutluluk.svg"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="font-semibold text-4xl text-white mt-10">
            Dakikalar içinde kapında
          </h3>
        </div>
        <div className="w-full  rounded-none bg-gray-50 md:p-6 md:w-[400px] md:rounded-lg  ">
          <div className=" md:hidden flex justify-between items-center bg-white h-10 px-2 py-1 ">
            <div className="flex gap-x-3 items-center">
              <TiLocation size={20} className="text-primary-brand-color" />
              <div className="text-sm text-gray-storm font-semibold">
                Teslimat Adresi Belirle
              </div>
            </div>
            <div>
              <IoChevronForwardOutline
                size={20}
                className="text-primary-brand-color"
              />
            </div>
          </div>
          <div className="p-6">
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
      </div>
    </section>
  );
};

export default HeroSection;
