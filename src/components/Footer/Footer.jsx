import React from "react";
import s from "./Footer.module.css";
import { ReactComponent as GitHubSVG } from "../../helpers/images/github.svg";
import { ReactComponent as LinkedinSVG } from "../../helpers/images/linkedin.svg";
import { ReactComponent as InstagramSVG } from "../../helpers/images/instagram.svg";
function Footer() {
  return (
    <section className={s.section}>
      <footer className={s.footer}>
        <h2 className={s.h2}>Conact me</h2>
        <ul className={s.ul}>
          <li className={s.li}>
            <a
              className={s.a}
              target="blank"
              href="https://github.com/MishynMykhailo/"
            >
              <GitHubSVG className={s.SVG} />
              <p className={s.p}>GitHub</p>
            </a>
          </li>
          <li className={s.li}>
            <a
              className={s.a}
              target="blank"
              href="https://www.linkedin.com/in/mykhailomishyn/"
            >
              <LinkedinSVG className={s.SVG} />
              <p className={s.p}>LinkedIn</p>
            </a>
          </li>
          <li className={s.li}>
            <a
              className={s.a}
              target="blank"
              href="https://www.instagram.com/mikhailmishi/"
            >
              <InstagramSVG className={s.SVG} />
              <p className={s.p}>Instagram</p>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default Footer;
