import { Link } from "react-router-dom";
import { LuGlobe } from "react-icons/lu";
import { BsFillPersonFill, BsFillPersonPlusFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="bg-brand-color w-full">
      <div className="container mx-auto h-16 md:h-11 flex items-center justify-center md:justify-between">
        <Link to="/">
          <img src="/src/assets/getir.svg" alt="Getir" />
        </Link>

        <div className="hidden md:flex ">
          <Link
            to="/campaigns"
            className="text-white text-sm  opacity-80 hover:opacity-100 transition-all flex items-center px-4 py-2"
          >
            <LuGlobe className="mr-2 size-4" />
            Türkçe (TR)
          </Link>
          <Link
            to="/campaigns"
            className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-all flex items-center px-4 py-2"
          >
            <BsFillPersonFill className="mr-2 size-4" />
            Giriş yap
          </Link>
          <Link
            to="/campaigns"
            className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-all flex items-center px-4 py-2"
          >
            <BsFillPersonPlusFill className="mr-2 size-4" />
            Kayıt Ol
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
