import Link from "next/link";
import { useSelector } from "react-redux";
import classes from "./navigation.module.scss";
import Logo from '../assets/images/logo_transparent.png'
import moment from 'moment'
import Time from '../assets/images/time.png'
import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'
import Mail from '../assets/images/mail.png'
import Temp from '../assets/images/temperature.png'
const navigation = () => {
  const weather = useSelector((state) => state.general?.weather)
  const city = weather?.name
  const temp = weather?.main?.temp
    console.log(weather?.name, ' kas cia?')
  return (
    <div className={classes.Nav}>
      <div className={classes.TopBar}>
        {/* WEATHER AND TIME */}
        <div className={classes.TopBarBox}>
        <div className={classes.WeatherAndTime}>
        <div className={classes.Weather}>
        <img src={Temp} alt="Temp"/>{city} {temp} &#8451;
        </div>
        <p> <img src={Time} alt="Time"/> {moment().format('MMMM Do YYYY')}</p>
       
        </div>
          

          {/* SOCIAL ICONS */}
        <div className={classes.Socials}>
        <img src={Facebook}/>
         <img src={Twitter}/>
         <img src={Instagram}/>
         <img src={Mail}/>
        </div>
        </div>
       
   
       
      </div>
      <div className={classes.Logo}> <img src={Logo} alt="Logo Picture"/></div>
      <ul>
        <div className={classes.firstElement}>
        <li>
          <Link href="/" >
            <p>Home</p>
          </Link>
        </li>
        </div>
        <div>
        <li>
          <Link href="/blogs" as="/blogs">
            <p>Blogs</p>
          </Link>
        </li>
        </div>
        <div>
        <li>
          <Link href="/gallery" as="/gallery">
          <p>Gallery</p>
          </Link>
        </li>
        </div>
      <div>
      <li>
          <Link href="/forum" as="/forum">
          <p>Forum</p>
          </Link>
        </li>
      </div>
       <div>
       <li>
          <Link href="/about" as="/about">
          <p>About Us</p>
          </Link>
        </li>
       </div>
       
      </ul>
    </div>
  );
};



export default navigation;
