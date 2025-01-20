import appStore from "../assets/mobileBanner/appstore-tr.svg";
import googlePlay from "../assets/mobileBanner/googleplay-tr.svg";
import appGalery from "../assets/mobileBanner/huawei-appgallery-tr.svg";
import menus from "../api/footer.json";
import Menu from "./ui/Menu";
const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      <div className="container mx-auto px-[150px]">
        <div className="grid grid-cols-4 pt-10">
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
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
