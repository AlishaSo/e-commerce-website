import React from "react";
import { Youtube, Spotify, Facebook } from "../Images";
export const MyFooter = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container main-footer-container">
          <h3 className="band-name">Orla Gartland</h3>

          <ul className="nav footer-nav">
            <li>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Spotify} alt="..." />
              </a>
            </li>

            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Youtube} alt="..." />
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="..." />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
