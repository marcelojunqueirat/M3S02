import './style.css'

export default function Header() {
  return (
    <header>
      <div id="titulo-sistema-header">
        <a
          href="/"
          style={{ textDecoration: 'none'}}
        >
          <img src="./logo.png" alt="Logo do sistema Ajude Meu PET" />
        </a>
        <h3>
          <a
            href="/"
            style={{ textDecoration: 'none', color: 'black', fontSize: '24px', fontWeight: 'bolder'}}
          >
            Ajude Meu PET
          </a>
        </h3>
      </div>

      <nav>
        <ul className="ul-list">

          <li className="li-item">
            <a
              href='/'
              style={{ textDecoration: 'none', color: 'black', fontSize: '32px', fontWeight: 'bolder'}}
            >
              Home
            </a>
          </li>
          <li className="li-item">
            <a
              href='/dashboard'
              style={{ textDecoration: 'none', color: 'black', fontSize: '32px', fontWeight: 'bolder'}}
            >
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}