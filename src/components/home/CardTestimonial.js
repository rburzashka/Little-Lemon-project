import { ReactComponent as Stars_1 } from '../../assets/icons/Stars-1.svg';
import { ReactComponent as Stars_2 } from '../../assets/icons/Stars-2.svg';
import { ReactComponent as Stars_3 } from '../../assets/icons/Stars-3.svg';
import { ReactComponent as Stars_4 } from '../../assets/icons/Stars-4.svg';
import { ReactComponent as Stars_5 } from '../../assets/icons/Stars-5.svg';



export default function CardTestimonial ({card}) {
    const starsArr = [Stars_1, Stars_2, Stars_3, Stars_4, Stars_5];
    const Stars = starsArr[parseInt(card.stars) - 1];

    return(
        <section className="card">
            
            <div className="customer-stars">
                <Stars />
            </div>

            <div className="customer-info">
                <div>
                    <img src={card.avatar} alt={card.imageAlt} />
                </div>
                <div>
                    <p> {card.firstName}</p>
                    <p> {card.lastName}</p>
                    
                </div>
            </div>

            <div className="customer-review">
                <p>{card.review}</p>
            </div>

        </section>
    );
}