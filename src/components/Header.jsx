/**
 *  Main `Header` component.
 *
 * @constructor
 */
function Header () {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="https://google.com" className="brand-logo" target="_blank" rel="noreferrer">React shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://google.com" target="_blank" rel="noreferrer">Repo</a></li>
                    <li><a href="https://google.com" target="_blank" rel="noreferrer">React: v18.2.0</a></li>
                </ul>
            </div>
        </nav>
    );
}

export {Header};
