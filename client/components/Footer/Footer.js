import classes from "./footer.module.scss";
import Logo from "../assets/images/logo_transparent.png";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";
import Mail from "../assets/images/mail.png";
import Feed1 from "../assets/images/Feed1.jpg";
import Time from "../assets/images/time.png";
import Comment from "../assets/images/comments.png";
import Link from "next/link";
const footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.UpperFooter}>
        {/* FIRST COLUM */}
        <div className={classes.FirstColum}>
          <img src={Logo} width="200px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua lacus vel
            facilisis
          </p>
          <div className={classes.Socials}>
            <div>
              <img src={Facebook} />
            </div>
            <div>
              <img src={Twitter} />
            </div>
            <div>
              <img src={Instagram} />
            </div>
            <div>
              <img src={Mail} />
            </div>
          </div>
        </div>

        <div className={classes.SecondColum}>
          <div>
            <div className={classes.redBox}></div>
            <p>RESENT FEEDS</p>
          </div>
          <div className={classes.Feed}>
            <img src={Feed1} />
            <div className={classes.FeedContent}>
              <h2>
                A MONSTER PROM POSTER GOT HIJACKED FOR A PAPA ROACH CONCERT...
              </h2>
              <p>
                {" "}
                <img src={Time} />
                Aug 01,2019 / <img src={Comment} />
                12
              </p>
            </div>
          </div>
          <div className={classes.Feed}>
            <img src={Feed1} />
            <div className={classes.FeedContent}>
              <h2>
                A MONSTER PROM POSTER GOT HIJACKED FOR A PAPA ROACH CONCERT...
              </h2>
              <p>
                {" "}
                <img src={Time} />
                Aug 01,2019 / <img src={Comment} />
                12
              </p>
            </div>
          </div>
        </div>
        <div className={classes.ThirdColum}>
          <div>
            <div className={classes.redBox}></div>
            <p>TAGS CLOUD</p>
          </div>
          <div className={classes.Tags}>
            <div>
              <p>Gaming</p>
            </div>
            <div>
              <p>Platform</p>
            </div>
            <div>
              <p>Rpg</p>
            </div>
            <div>
              <p>WebGame</p>
            </div>
            <div>
              <p>Heroes</p>
            </div>
            <div>
              <p>Role-playing</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.LowerFooter}>
        <div className={classes.EndBox}>
          <p>
            Copyright ©2020 All rights reserved | This template is made with by
            Colorlib
          </p>
          <ul>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p>Support</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
