import appStore from "/assets/mobileBanner/appstore-tr.svg";
import googlePlay from "/assets/mobileBanner/googleplay-tr.svg";
import appGalery from "/assets/mobileBanner/huawei-appgallery-tr.svg";
import phoneLanding from "/assets/mobileBanner/phoneLanding.png";
const MobileAppBanner = () => {
  return (
    <section className="md:container md:mx-auto md:my-6">
      <div className="bg-primary-brand-color bg-mobile-app md:rounded-lg h-80 flex md:justify-between justify-center items-center">
        <div className="px-4 md:px-0 md:ml-12 text-white grid gap-y-3">
          <h2 className="text-3xl font-bold">Getir'i indir!</h2>
          <p className="text-base font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
          </p>
          <nav className="pt-5">
            <ul className="flex flex-wrap gap-x-2 gap-y-2 sm:flex-nowrap sm:flex-row sm:gap-x-2">
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
        </div>
        <picture className="hidden lg:block !pb-0 pt-3 self-end ">
          <img src={phoneLanding} alt="phoneLanding" />
        </picture>
      </div>
    </section>
  );
};

export default MobileAppBanner;
