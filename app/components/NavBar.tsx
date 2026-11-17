export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="brand">
          🍴 NextBites
        </a>
        <div className="nav-links">
          <a href="/">Recipes</a>
          <a
            href="https://github.com/kalviumcommunity/nextbites"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}