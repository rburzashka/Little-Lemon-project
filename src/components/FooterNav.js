import { Outlet, Link } from "react-router-dom";

export default function SocialNav () {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservations</Link>
          </li>
          <li>
            <Link to="">Order online</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
