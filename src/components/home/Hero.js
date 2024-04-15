import { NavLink } from "react-router-dom";
import '../../sass/partials/hero.scss';

 export default function Hero () {

    const heroImage = () => require('../../assets/images/restauranfood.webp');

    return(
        <div id="hero">
            <div className="content-wrapper flex-col-2">
                <article className="content colored">
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                    <NavLink to="/reservation" className={({ isActive }) => (isActive ? "active-link" : "") + " btn-page"}>
                        <span>Reserve a table</span>
                    </NavLink>
                    
                </article>
                <div className="image">
                    <img src={heroImage()} alt="Lorem ipsum dolor sit amet" />
                </div>
            </div>
        </div>
    );
 }