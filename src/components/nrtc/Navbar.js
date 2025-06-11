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
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">Beranda</a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Daftar Pemenang
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1KvKdceI7uJ69vKyvRFD87W3w7AGJ2EJ3?usp=sharing"
                    target="_blank"
                  >
                    Daftar Pemenang 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1d-kHyOz1eHjZvxVGDBpnJSMWFlwTKbte/view?usp=sharing"
                    target="_blank"
                  >
                    Daftar Pemenang 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/11u-wyqTiCAHS064A20X9HXWWdO_S3MFq/view?usp=share_link"
                    target="_blank"
                  >
                    Daftar Pemenang 2022
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a
                href="https://drive.google.com/file/d/1FD4SoRz3ENzYAT-TSWpNFDl-5ngURgoP/view?usp=sharing"
                target="_blank"
              >
                Buku Panduan
              </a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Galeri
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1p9ZRMi7TI6JzMjNCmeiBhlwIuxLqt7YC?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galeri 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/11phBTa4qXqwNViMttlydJ_lT8M4pjP-G?usp=drive_link"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galeri 2023
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/drive/folders/1LMIUW9PqVYZzAXtVY22g31MAplSuKRgP?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galeri 2022
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
                    href="https://drive.google.com/drive/folders/1A-0SR5F-KMgClTisz5dheVXCOnvZhcYZ?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Galeri 2019
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Liputan Media
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="/News2" rel="noreferrer noopener">
                    Berita dari Media
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1nZYFOswe9xRy-s4-fTlSiHedpxFayAM2/view?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Pesan Siaran 2024
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1tCNqnQH-uL4rZ3Sw-uhiomupn5ZTtMjd/view?usp=sharing"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Pesan Siaran 2023
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="menu-item">
              <a href="#faqs">FAQ</a>
            </li>
            <li className="menu-item">
              <a href="#conts">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  );
};
export default Navbar;
