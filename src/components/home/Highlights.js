import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../sass/partials/highlights.scss';

import CardHighlights from './CardHighlights';

const specials = [
    {
        id: "001",
        src: require('../../assets/images/card-1.webp'),
        imageAlt: "Alt Greek salad",
        title: "Greek salad",
        price: "12.99",
        text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
        id: "002",
        src: require('../../assets/images/card-2.webp'),
        imageAlt: "Bruchetta",
        title: "Bruchetta",
        price: "5.99",
        text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
        id: "003",
        src: require('../../assets/images/card-3.webp'),
        imageAlt: "Lemon Dessert",
        title: "Lemon Dessert",
        price: "5.00",
        text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
        id: "004",
        src: require('../../assets/images/card-1.webp'),
        imageAlt: "Alt Greek salad",
        title: "Greek salad",
        price: "12.99",
        text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
        id: "005",
        src: require('../../assets/images/card-2.webp'),
        imageAlt: "Bruchetta",
        title: "Bruchetta",
        price: "5.99",
        text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
];


export default function Highlights () {

    const [numberOfcard, setNumberOfcard] = useState(3);

    const onResize = (e) => {
        if (window.innerWidth < 600) {
            setNumberOfcard((prev)=>1);
        } else if (window.innerWidth < 961) {
            setNumberOfcard((prev)=>2);
        } else if (window.innerWidth > 960) {
            setNumberOfcard((prev)=>3);
        }
    }

    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => {
        window.removeEventListener("resize", onResize)
        }
    
      }, []);

    return (
        <div id="highlights">
            <section className="content-wrapper">
                <div className='section-title-wrapper'>
                    <h1 className="title">This weeks specials</h1>
                    <button type="button" className="btn-page">
                        <span>Online menu</span>
                    </button>
                </div>
                
                <div id="carousel">
                {
                    <Slide slidesToScroll={1} 
                        slidesToShow={numberOfcard} 
                        autoplay={false} 
                        indicators={false}
                        duration={30}
                        transitionDuration={300}
                        infinite={false}>

                        {specials.map( (card, index) => {
                                        return (
                                            <CardHighlights key={card.id} card={card}/>
                                        )
                        })}
                    </Slide>
                }
                </div>
            </section>
            
            
            
        </div>
    );
}