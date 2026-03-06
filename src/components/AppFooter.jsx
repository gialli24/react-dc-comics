import dcLogoBG from '/img/dc-logo-bg.png'
import facebook from '/img/footer-facebook.png'
import periscope from '/img/footer-periscope.png'
import pinterest from '/img/footer-pinterest.png'
import twitter from '/img/footer-twitter.png'
import youtube from '/img/footer-youtube.png'

export default function AppFooter() {
    return (
        <footer>
            <div className="pagination-container">
                <div className="container">
                    <div className='pagination'>
                        <div className="row row-cols-3">
                            <div className="col">
                                <h5>Dc Comics</h5>
                                <ul className='list-unstyled'>
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Collectibles</li>
                                    <li>Videos</li>
                                    <li>Fans</li>
                                    <li>News</li>
                                </ul>

                                <h5>Shop</h5>
                                <ul className='list-unstyled'>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5>Dc</h5>
                                <ul className='list-unstyled'>
                                    <li>Terms of Use</li>
                                    <li>Privacy Policy (New)</li>
                                    <li>Ad Choices</li>
                                    <li>Advertising</li>
                                    <li>Jobs</li>
                                    <li>Subscriptions</li>
                                    <li>Talent Workshops</li>
                                    <li>CPSC Certificates</li>
                                    <li>Ratings</li>
                                    <li>Shop Help</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className="col">
                                <h5>Sites</h5>
                                <ul className='list-unstyled'>
                                    <li>DC</li>
                                    <li>MAD Magazine</li>
                                    <li>DC Kids</li>
                                    <li>DC Universe</li>
                                    <li>DC Power Visa</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <img src={dcLogoBG} alt="" className='dcLogoBG' />
                </div>
            </div>

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