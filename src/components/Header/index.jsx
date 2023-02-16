import "./style.css";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <h2 className="header__logo">
          Di<span>(nara)</span>
        </h2>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li>Work</li>
            <li>About me</li>
            <li>Experience</li>
          </ul>
        </nav>
        <button className="header__contact">Contact</button>
      </div>
    </header>
  );
};
