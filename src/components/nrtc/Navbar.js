import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("hidden-scrolling");
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    activeSubMenu.removeAttribute("style");
    activeSubMenu.parentElement.classList.remove("active");
  };

  const resizeFix = () => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector(".nav-menu");
      const menuOverlay = document.querySelector(".menu-overlay");
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          if (document.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector(".open-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".close-nav-menu")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".menu-overlay")
      .addEventListener("click", handleToggleNav);
    document
      .querySelector(".nav-menu")
      .addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .querySelector(".open-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".close-nav-menu")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".menu-overlay")
        .removeEventListener("click", handleToggleNav);
      document
        .querySelector(".nav-menu")
        .removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="./assets/img/logo/NRTC PNG.WebP" />
        </div>
        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>
        <nav className="nav-menu">
          <div className="close-nav-menu">
            {/* <img
                src="./assets/images/logo/icons8-close.svg"
                alt="close"
              /> */}
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">Utama</a>
            </li>
            {/* <li className="menu-item">
              <a
                href="https://drive.google.com/file/d/11u-wyqTiCAHS064A20X9HXWWdO_S3MFq/view?usp=share_link"
                rel="noreferrer noopener"
                target="_blank"
              >
                List of Winner
              </a>
            </li> */}
            {/* <li className="menu-item">
              <a
                href="https://drive.google.com/file/d/1-2luVIQYdK0oDAkzCs2227HE-VVe1P59/view?usp=share_linkt"
                rel="noreferrer noopener"
                target="_blank"
              >
               Berita
              </a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Daftar Pemenang
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="https://drive.google.com/file/d/1d-kHyOz1eHjZvxVGDBpnJSMWFlwTKbte/view?usp=sharing">Daftar Pemenang 2023</a>
                </li>
                <li className="menu-item">
                  <a href="https://drive.google.com/file/d/11u-wyqTiCAHS064A20X9HXWWdO_S3MFq/view?usp=share_link">Daftar Pemenang 2022</a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="https://drive.google.com/file/d/1-ESZ77LoMUYKHp4ua5-EBnL1LZWvJSPv/view?usp=sharing" target="_blank" data-toggle="sub-menu">
                Buku Panduan
              </a>
            </li>
            {/* <li className="menu-item">
              <a href="/NewsletterPage">Guide Book</a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Galeri
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1A-0SR5F-KMgClTisz5dheVXCOnvZhcYZ?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galeri 2019
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1A-0SR5F-KMgClTisz5dheVXCOnvZhcYZ?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galeri 2021
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1LMIUW9PqVYZzAXtVY22g31MAplSuKRgP?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galery 2022
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Media Coverage
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="/News2"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Berita
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1-2luVIQYdK0oDAkzCs2227HE-VVe1P59/view?usp=share_linkt"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Siaran Pers
                  </a>
                </li>
                {/* <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1LMIUW9PqVYZzAXtVY22g31MAplSuKRgP?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galery 2022
                  </a>
                </li> */}
              </ul>
            </li>
            {/* <li className="menu-item">
              <a href="/News2">News</a>
            </li> */}
            <li className="menu-item">
              <a href="#faqs">FAQ</a>
            </li>
            <li className="menu-item">
              <a href="#conts">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};
export default Navbar;