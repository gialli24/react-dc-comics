import dcLogoBG from '/img/dc-logo-bg.png'
import facebook from '/img/footer-facebook.png'
import periscope from '/img/footer-periscope.png'
import pinterest from '/img/footer-pinterest.png'
import twitter from '/img/footer-twitter.png'
import youtube from '/img/footer-youtube.png'

export default function AppFooter({ links }) {

    return (
        <footer>
            <section className="footer-nav">
                <div className="container">
                    <nav className="row row-cols-3">

                        {
                            links.map((navGroup) => (

                                <div key={navGroup.id} className="nav-group col">
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

            <section className="footer-banner">
                <div className="container">

                    <div className="wrapper">

                        <button>
                            Sign-up Now!
                        </button>

                        <nav>
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
                        </nav>
                    </div>
                </div>
            </section>
        </footer>
    );
}