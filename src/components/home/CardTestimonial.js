import { ReactComponent as Stars_1 } from '../../assets/icons/Stars-1.svg';
import { ReactComponent as Stars_2 } from '../../assets/icons/Stars-2.svg';
import { ReactComponent as Stars_3 } from '../../assets/icons/Stars-3.svg';
import { ReactComponent as Stars_4 } from '../../assets/icons/Stars-4.svg';
import { ReactComponent as Stars_5 } from '../../assets/icons/Stars-5.svg';



export default function CardTestimonial ({card}) {
    const starsArr = [Stars_1, Stars_2, Stars_3, Stars_4, Stars_5];
    const Stars = starsArr[parseInt(card.stars) - 1];

    return(
        <section className="card" itemScope itemType="https://schema.org/Review">
            
            <div className="customer-stars" itemProp="ratingValue" title={"Rating: " + card.stars}>
                <Stars />
            </div>

            <div className="customer-info">
                <div>
                    <img itemProp="image" src={card.avatar} alt={card.imageAlt} />
                </div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <p itemProp="givenName"> {card.firstName}</p>
                    <p itemProp="familyName"> {card.lastName}</p>
                    
                </div>
            </div>

            <div className="customer-review" itemProp="reviewBody">
                {card.review}
            </div>

        </section>
    );
}