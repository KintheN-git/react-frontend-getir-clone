interface MenuData {
  title: string;
  items: {
    name: string;
    link: string;
  };
}
const Menu = ({ title, items }: MenuData) => {
  return <div>{title}</div>;
};

export default Menu;
