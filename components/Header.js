import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo">
            <span style={{ color: '#f06292' }}>N</span>
            <span style={{ color: '#29b6f6' }}>A</span>
            <span style={{ color: '#8bc34a' }}>A</span>
          </a>
        </Link>

        <p>
          <button className="signInButton">Sign in</button>
        </p>
      </nav>
      <main>

      </main>

      <style jsx>{`
        header {
          border-bottom: 1px solid #ccc;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        .main {
          height: 800px;
          width: 100%;
          background: url(/background.jpg)
          background-size: cover;
        }
        .logo {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .signInButton {
          background-color: #1eb1fc;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        .signInButton:hover {
          background-color: #1b9fe2;
        }
      `}</style>
    </header>
  );
};

export default Header;