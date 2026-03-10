import ComicCard from './ComicCard';
import Tools from './Tools'

export default function AppMain({ comics }) {

    return (
        <main>
            <section className="jumbo"></section>

            <section className="series">
                <div className="container py-5">
                    <span className="title-tag">
                        Current Series
                    </span>

                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">

                        {
                            comics.map((comic) => (
                                < ComicCard comic={comic} key={comic.id} />
                            ))
                        }

                    </div>

                    <div className="wrapper">
                        <button>Load More</button>
                    </div>
                </div>
            </section>

            <Tools />
        </main>
    );
}