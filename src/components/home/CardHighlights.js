import {ReactComponent as Delivery} from '../../assets/icons/delivery.svg';

export default function CardHighlights ({card}) {
    const currency = "$ ";

    return (
        <section className="card">
            <div className="image">
                <img src={card.src} alt={card.imageAlt} />
            </div>
            <div className="content">
                <div>
                    <div className='wrapper-title'>
                        <h2 className='card-title'>{card.title}</h2>
                        <div className='card-price'>{currency + card.price}</div>
                    </div>
                    <div className='card-text'>
                        <p>{card.text}</p>
                    </div>
                </div>
                <div className="order">
                    <button className='order-delivery'>
                        <span>Order a delivery</span> 
                        <Delivery />
                        </button>
                </div>
            </div>
            
        </section>
    )
}