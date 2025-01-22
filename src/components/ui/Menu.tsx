import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { FaChevronDown } from "react-icons/fa6";
interface MenuData {
  title: string;
  items: { name: string; link: string }[];
}
const Menu = ({ title, items }: MenuData) => {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    if (windowWidth < 768) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    if (windowWidth < 768) {
      setIsOpen(false);
    }
    if (windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6
          onClick={handleToggle}
          className="text-lg text-primary-brand-color cursor-pointer flex items-center justify-between"
        >
          {title}
          <button className="md:hidden w-8 h-8 rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color flex items-center justify-center">
            <span
              className={`transition-all transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <FaChevronDown size={14} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-1 md:gap-y-2">
              {items.map((item: any, index: number) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 text-sm hover:text-brand-color transition-all"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
};

export default Menu;
