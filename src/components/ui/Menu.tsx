interface MenuData {
  title: string;
  items: { name: string; link: string }[];
}
const Menu = ({ title, items }: MenuData) => {
  return (
    <nav>
      <ul className="grid gap-y-4">
        <h6 className="text-lg text-primary-brand-color">{title}</h6>
        {items.map((item: any, index: number) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-sm"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
