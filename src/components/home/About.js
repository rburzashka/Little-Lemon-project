import '../../sass/partials/about.scss';

const aboutImages = [
    {src: () => require('../../assets/images/about-1.webp'),
     alt: "Little lemon about us 1"},
    {src: () => require('../../assets/images/about-2.webp'),
    alt: "Little lemon about us 2"},
    {src: () => require('../../assets/images/about-mh.webp'),
    alt: "Little lemon about us 2"},
    {src: () => require('../../assets/images/about-mw.webp'),
    alt: "Little lemon about us 2"}
];

export default function About ({responsive}) {
    
    return (
        <article id="about">
            <section className={"content-wrapper " + (responsive < 3 ? "wrapper-m" : "")} >
                <div className="content">
                    <h1 className='title'>Little Lemon</h1>
                    <h2 className='subtitle'>Chicago</h2>

                    {responsive === 1 &&
                    <div className="image">
                        <img src={aboutImages[2].src()} alt={aboutImages[2].alt} />
                    </div>
                    }

                    {responsive === 2 &&
                    <div className="image">
                        <img src={aboutImages[3].src()} alt={aboutImages[3].alt} />
                    </div>
                    }
                    <div className='text'>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                </div>
                {responsive > 2 &&
                <div className="image">
                    <img src={aboutImages[0].src()} alt={aboutImages[0].alt} />
                    <img src={aboutImages[1].src()} alt={aboutImages[1].alt} />
                </div>
                }
            </section>
         </article>
    );
}