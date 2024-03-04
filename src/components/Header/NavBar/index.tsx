import { ItemsType } from "./types";

const NavBar = ({ items }: {
  items: ItemsType[];
}) => {
  return (
    <nav className="nav-bar">
      <ul>
        {items.map(item => (
          <li key={item.id} className={`item-${item.text}`}>
            <a className="link" onClick={() => {
              const element = document.getElementById(item.id);
              const headerSize = 80;
              const elementPosition = element?.offsetTop;
              const offsetPosition = elementPosition! - headerSize;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              })
            }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav >
  );
}

export default NavBar;