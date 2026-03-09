import dcLogoBG from '/img/dc-logo-bg.png'
import facebook from '/img/footer-facebook.png'
import periscope from '/img/footer-periscope.png'
import pinterest from '/img/footer-pinterest.png'
import twitter from '/img/footer-twitter.png'
import youtube from '/img/footer-youtube.png'

export default function AppFooter() {

    const navGroups = [
        {
            id: 1,
            title: "DC Comics",
            urls: [
                {
                    id: 1,
                    text: "Characters",
                    link: "#"
                },
                {
                    id: 2,
                    text: "Comics",
                    link: "#"
                },
                {
                    id: 3,
                    text: "TV",
                    link: "#"
                },
                {
                    id: 4,
                    text: "Games",
                    link: "#"
                },
                {
                    id: 5,
                    text: "Collectibles",
                    link: "#"
                },
                {
                    id: 6,
                    text: "Videos",
                    link: "#"
                },
                {
                    id: 7,
                    text: "Fans",
                    link: "#"
                },
                {
                    id: 8,
                    text: "News",
                    link: "#"
                }
            ]
        },
        {
            id: 2,
            title: "DC",
            urls: [
                {
                    id: 1,
                    text: "Terms Of Use",
                    link: "#"
                },
                {
                    id: 2,
                    text: "Privacy policy (New)",
                    link: "#"
                },
                {
                    id: 3,
                    text: "Ad Choices",
                    link: "#"
                },
                {
                    id: 4,
                    text: "Advertising",
                    link: "#"
                },
                {
                    id: 5,
                    text: "Jobs",
                    link: "#"
                },
                {
                    id: 6,
                    text: "Subscriptions",
                    link: "#"
                },
                {
                    id: 7,
                    text: "Talent Workshops",
                    link: "#"
                },
                {
                    id: 8,
                    text: "CPSC Certificates",
                    link: "#"
                },
                {
                    id: 9,
                    text: "Ratings",
                    link: "#"
                },
                {
                    id: 10,
                    text: "Shop Help",
                    link: "#"
                },
                {
                    id: 11,
                    text: "Contact Us",
                    link: "#"
                }
            ]
        },
        {
            id: 3,
            title: "Sites",
            urls: [
                {
                    id: 1,
                    text: "DC",
                    link: "#"
                },
                {
                    id: 2,
                    text: "MAD Magazine",
                    link: "#"
                },
                {
                    id: 3,
                    text: "DC Kids",
                    link: "#"
                },
                {
                    id: 4,
                    text: "DC Universe",
                    link: "#"
                },
                {
                    id: 5,
                    text: "DC Power Visa",
                    link: "#"
                }
            ]
        },
        {
            id: 4,
            title: "Shop",
            urls: [
                {
                    id: 1,
                    text: "Shop DC",
                    link: "#"
                },
                {
                    id: 2,
                    text: "Shop DC Collectibles",
                    link: "#"
                }
            ]
        }
    ]

    return (
        <footer>
            <section className="footer-nav">
                <div className="container">
                    <nav className="row row-cols-3">

                        {
                            navGroups.map((navGroup) => (

                                <div key={navGroup.id} className="pippo col">
                                    <h5>{navGroup.title}</h5>

                                    <ul className='list-unstyled'>
                                        {
                                            navGroup.urls.map((url) => (
                                                <li key={url.id}>
                                                    <a href={url.link}>{url.text}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                            ))
                        }

                    </nav>

                    <img src={dcLogoBG} alt="" className='dcLogoBG' />
                </div>
            </section>

            <div className="footer-banner">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center gap-4">
                        <button className='signup-btn'>
                            Sign-up Now!
                        </button>

                        <div className="social-nav">
                            <a href="#">Follow Us</a>
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="#">
                                <img src={youtube} alt="" />
                            </a>
                            <a href="#">
                                <img src={pinterest} alt="" />
                            </a>
                            <a href="#">
                                <img src={periscope} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}