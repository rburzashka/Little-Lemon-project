import {ReactComponent as Logo} from '../assets/icons/site-logo-vertical.svg';
import { Outlet, Link } from "react-router-dom";

export default function Footer({children}) {
  const socials = [
    {
      alt: 'Email',
      src: 'envilope.svg',
      url: "mailto: hello@example.com",
    },
    {
      alt: 'Linkedin',
      src: 'in.svg',
      url: "https://www.linkedin.com",
    },
    {
      alt: 'Medium',
      src: 'medium.svg',
      url: "https://medium.com",
    },
    {
      alt: 'Facebook',
      src: 'facebook.svg',
      url: "https://facebook.com",
    },
  ];

  return (
    <footer id="site-footer" aria-label="Site footer">
      <div className="content-wrapper" >

        <div aria-hidden="true" id="footer-logo">
          <Logo />
        </div>

        <div className="content">

          <section>
            <h2 className="footer-title">Doormat Navigation</h2>
            <div>
              <div className="pages-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservation">Reservations</Link>
                <Link to="order-online">Order online</Link>
                <Link to="/login">Login</Link>

                <Outlet />
              </div>
            </div>
          </section>


          <section>
            <h2 className="footer-title">Contact</h2>
            <div>Adress <br />
              phone number<br />
              email
            </div>
          </section>

          <section>
            <h2 className="footer-title">Social Media Links</h2>
            <div id="social-links">
              {/* Add social media links based on the `socials` data */
                socials.map((link, index) => {
                  return (
                    <a href={link.url}
                      target='_blank'
                      rel="noreferrer"
                      key={index}
                      id={`links-${index}`}  >
                    <img 
                      src={require("../assets/icons/" + link.src)} 
                      alt={`${link.alt} social icon svg format`}/>
                    </a>
                  )
                })
            }
            </div>
          </section>

        </div>

      </div>
      
    </footer>
  );
}