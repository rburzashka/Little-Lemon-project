import CardTestimonials from './CardTestimonial';

const customers = [
    {
        id: "001",
        stars: "5",
        avatar: require('../../assets/images/customer-1.webp'),
        imageAlt: "John  review",
        firstName: "John",
        lastName: "Smile",
        review: "The famous greek salad of crispy lettuce, peppers. ",
    },
    {
        id: "002",
        stars: "3",
        avatar: require('../../assets/images/customer-2.webp'),
        imageAlt: "John Smith review",
        firstName: "John",
        lastName: "Smith",
        review: "The famous greek salad of crispy lettuce, peppers. ",
    },
    {
        id: "003",
        stars: "4",
        avatar: require('../../assets/images/customer-3.webp'),
        imageAlt: "John Awesome review",
        firstName: "John",
        lastName: "Green",
        review: "The famous greek salad of crispy lettuce, peppers. ",
    },
    {
        id: "004",
        stars: "4",
        avatar: require('../../assets/images/customer-4.webp'),
        imageAlt: "John Black review",
        firstName: "John",
        lastName: "Black",
        review: "The famous greek salad of crispy lettuce, peppers. ",
    },
];

export default function Testimonials () {
    return (
        <div id="testimonials">
            <section className="content-wrapper" >
            <h1 className='title'>Testimonials</h1>
            <div id="wrapper-cards">
                {customers.map( (card, index) => {
                        return (
                            <CardTestimonials 
                            key={'t-' + card.id} 
                            card={card} 
                            />
                        )})}
            </div>
                

            </section>
        </div>
    );
}