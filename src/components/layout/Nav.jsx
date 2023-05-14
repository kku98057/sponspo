import { Link } from "react-router-dom";

export default function Nav() {
  const menuList = ["About", "Athletes", "Pricing", "CS"];
  return (
    <nav className="h-full">
      <ul className="h-full flex items-center justify-center gap-5">
        {menuList.map((list) => (
          <li>
            <Link to={`/${list}`}>
              <span className=" text-white">{list}</span>
            </Link>
          </li>
        ))}
        {/* <li>
          <Link to="/">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Athletes</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Pricing</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>CS</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
