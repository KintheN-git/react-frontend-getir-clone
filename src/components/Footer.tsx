import appStore from "../assets/mobileBanner/appstore-tr.svg";
import googlePlay from "../assets/mobileBanner/googleplay-tr.svg";
import appGalery from "../assets/mobileBanner/huawei-appgallery-tr.svg";
import menus from "../api/footer.json";
import Menu from "./ui/Menu";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      <div className="container mx-auto">
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-10 px-4 md:px-0">
          <section>
            <nav>
              <ul className="grid gap-y-4">
                <h6 className="text-lg text-primary-brand-color">
                  Getir'i indirin!
                </h6>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/getir-groceries-food-beyond/id995280265"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img src={appStore} alt="appStore" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.getir"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img src={googlePlay} alt="googlePlay" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://appgallery.huawei.com/#/app/C100954039"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img src={appGalery} alt="appGalery" />
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center border-t border-gray-200 mt-6 py-6 ">
          <div className="text-gray-700 text-xs flex gap-x-6">
            © {new Date().getFullYear()} Getir
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-primary-brand-color before:content-[''] before:w-1 before:h-1 before:bg-gray-700 before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi toplumu hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-4 items-center text-[#697488]">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center transition-all"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center transition-all"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center transition-all"
            >
              <FaInstagram size={20} />
            </a>
            <button className="transition-colors h-8 flex items-center gap-x-1  border border-gray-100 rounded-lg text-xs px-3 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color">
              <LuGlobe className="mr-2 size-4" />
              Türkçe (TR)
            </button>
          </nav>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
