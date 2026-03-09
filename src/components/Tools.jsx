import buyComics from '/img/buy-comics-digital-comics.png'
import merchandise from '/img/buy-comics-merchandise.png'
import subscription from '/img/buy-comics-subscriptions.png'
import locator from '/img/buy-comics-shop-locator.png'
import powerVisa from '/img/buy-dc-power-visa.svg'

export default function Tools() {
    return (
        <section className="services">

            <div className="container">
                <div className="row row-cols-lg-5 row-cols-md-3 row-cols-1">

                    <div className="service col">
                        <img src={buyComics} alt="buy Comics" />
                        <span>Digital Comics</span>
                    </div>

                    <div className="service col">
                        <img src={merchandise} alt="buy Comics" />
                        <span>DC Merchandise</span>
                    </div>

                    <div className="service col">
                        <img src={subscription} alt="buy Comics" />
                        <span>Subscription</span>
                    </div>

                    <div className="service col">
                        <img src={locator} alt="buy Comics" />
                        <span>Comic Shop Locator</span>
                    </div>

                    <div className="service col">
                        <img src={powerVisa} alt="buy Comics" />
                        <span>DC Power Visa</span>
                    </div>
                </div>
            </div>
        </section>
    );
}