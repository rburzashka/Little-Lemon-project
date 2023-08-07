import { NavLink } from "react-router-dom";
import '../../sass/partials/hero.scss';

 export default function Hero () {

    const heroImage = () => require('../../assets/images/restauranfood.webp');

    return(
        <article id="hero">
            <section className="content-wrapper flex-col-2">
                <div className="content colored">
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                    <NavLink to="/reservation" className={({ isActive }) => (isActive ? "active-link" : "")}>
                        <button className="btn-page">
                            <span>Reserve a table</span>
                        </button>
                    </NavLink>
                    
                </div>
                <div className="image">
                    <img src={heroImage()} alt="" />
                </div>
            </section>
        </article>
    );
 }