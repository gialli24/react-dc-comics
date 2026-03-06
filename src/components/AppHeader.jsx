import dcLogo from '/img/dc-logo.png'

export default function AppHeader() {
    return (
        <header>
            <div className="container">
                <img src={dcLogo} alt="DC Logo" className='logo' />

                <nav className='text-uppercase'>
                    <a href="#" className='nav-item'>Characters</a>
                    <a href="#" className='nav-item active'>Comics</a>
                    <a href="#" className='nav-item'>Movies</a>
                    <a href="#" className='nav-item'>TV</a>
                    <a href="#" className='nav-item'>Games</a>
                    <a href="#" className='nav-item'>Collectibles</a>
                    <a href="#" className='nav-item'>Videos</a>
                    <a href="#" className='nav-item'>Fans</a>
                    <a href="#" className='nav-item'>News</a>
                    <a href="#" className='nav-item'>Shop</a>
                </nav>
            </div>
        </header>
    );
}