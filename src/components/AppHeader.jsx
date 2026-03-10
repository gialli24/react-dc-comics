import dcLogo from '/img/dc-logo.png'

export default function AppHeader({ links }) {

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