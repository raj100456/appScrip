import "./styles/globals.css";
import Footer from "./components/Footer";
import LogoIcon from "./components/Common/Icons/LogoIcon";
import SearchIcon from "./components/Common/Icons/SearchIcon";
import HeartIcon from "./components/Common/Icons/HeartIcon";
import CartIcon from "./components/Common/Icons/CartIcon";
import UserIcon from "./components/Common/Icons/UserIcon";
import LanguageDropdown from "./components/Common/LanguageDropdown";


export const metadata = {
  title: "Appscrip-task",
  description: "Appscrip-task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="container">
          <header className="header">
              <div className="logo"><LogoIcon /></div>
              <div className="title">
                <h1 className="app-title">Shopping App</h1>
              </div>
              <div className="icons">
                <span className="icon">
                  <SearchIcon />
                </span>
                <span className="icon">
                  <HeartIcon />
                </span>
                <span className="icon">
                  <CartIcon />
                </span>
                <span className="icon">
                  <UserIcon />
                </span>
                <LanguageDropdown />
              </div>
          </header>
          <nav className="nav">
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </nav>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
