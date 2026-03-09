import dcLogo from '/img/dc-logo.png'

export default function AppHeader() {

    const links = [
        {
            id: 1,
            text: "Characters",
            url: "#",
            isCurrent: false
        },
        {
            id: 2,
            text: "Comics",
            url: "#",
            isCurrent: true
        },
        {
            id: 3,
            text: "Movies",
            url: "#",
            isCurrent: false
        },
        {
            id: 4,
            text: "TV",
            url: "#",
            isCurrent: false
        },
        {
            id: 5,
            text: "Games",
            url: "#",
            isCurrent: false
        },
        {
            id: 6,
            text: "Collectibles",
            url: "#",
            isCurrent: false
        },
        {
            id: 7,
            text: "Fans",
            url: "#",
            isCurrent: false
        },
        {
            id: 8,
            text: "News",
            url: "#",
            isCurrent: false
        },
        {
            id: 9,
            text: "Shop",
            url: "#",
            isCurrent: false
        }
    ]

    return (
        <header>
            <div className="container">
                <img src={dcLogo} alt="DC Logo" className='logo' />

                <nav>
                    <ul className='list-unstyled'>

                        {
                            links.map((link) => (
                                <li key={link.id} className={link.isCurrent ? "active" : ""}>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
            </div>
        </header>
    );
}