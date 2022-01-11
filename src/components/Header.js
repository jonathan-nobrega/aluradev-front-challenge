export default function Header() {
    return (
        <div className="header-container">
            <div className="header-logo">
                <a href={window.location.origin}>
                <img src="img/Logo.svg" alt='logo' />
                </a>
            </div>
            <div className="header-search">
                <input className="header-search-input" type="text" placeholder="Busque por algo" />
            </div>
            <div className="header-user">
                <img src="img/Photo.png" alt='user' />
                <a style={{ "marginLeft": "15px" }} href="localhost:3000">Jony</a>
            </div>
            <div className="header-icons">
                <img className="header-icon-search" src="img/Search.svg" alt='search' />
                <img className="header-icon-menu" src="img/Menu.svg" alt='menu' />
            </div>
        </div>
    )
}