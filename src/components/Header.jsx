import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import profileImg from '../assets/ford.jpg';
import pinIcon from '../assets/pin.svg';
import checkIcon from '../assets/check.svg';
import '../styles/Header.css'; // <-- import the CSS file

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Set SVG filter based on theme
  const pinFilter =
    theme === 'dark'
      ? 'invert(1) brightness(2)' // makes icon light for dark mode
      : 'none'; // normal for light mode

  return (
    <header style={{ position: 'relative' }}>
      <div
        className="theme-toggle-container"
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 10,
        }}
      >
        <button
          className={`theme-toggle ${theme}`}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <span className="toggle-slider">
            {theme === 'light' ? (
              <span className="icon-sun">☀️</span>
            ) : (
              <span className="icon-moon">🌙</span>
            )}
          </span>
        </button>
      </div>
      <div className="flex items-center">
        <div className="mr-10">
          <img
            src={profileImg}
            alt="Profile"
            style={{ width: 130, height: 150, borderRadius: '10%', marginLeft: 16 }}
          />
        </div>
        <div>
          <b style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Klifford Orquillas
            <img
              src={checkIcon}
              alt="Verified"
              style={{
                width: 18,
                height: 18,
                marginBottom: 2,
                verticalAlign: 'middle',
              }}
              title="Verified"
            />

          </b>
          <span className="text-[12px] my-1" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <img
              src={pinIcon}
              alt="Pin"
              style={{
                width: 14,
                height: 14,
                filter: pinFilter,
                transition: 'filter 0.3s',
              }}
            />
            <span className="mt-1">Iligan, Northern Mindanao, Philippines</span>
          </span>
          <span className="font-[500]">Senior Software Engineer</span>
          <br />
          <div>
           <button
            className="tilt-btn call"
            onClick={() => window.open('https://calendly.com/fordorq/consultation', '_blank')}
          >
            Schedule a Call
          </button>

          <button
            className="tilt-btn email"
            onClick={() => window.location.href = "mailto:fordorq@gmail.com?subject=Let's%20Connect&body=Hi%20Klifford,"}
          >
            Send an Email
          </button>
          </div>
        </div>
      </div>
      {/* <nav>
        <Link to="/">Home</Link>
      </nav> */}
    </header>
  );
}

export default Header;