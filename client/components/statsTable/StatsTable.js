import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import classes from "./statsTable.module.scss";
import RoguePic from "../../components/assets/images/archer.png";
import WarriorPic from "../../components/assets/images/warrior.png";
import WizardPic from "../../components/assets/images/wizard.png";
const statsTable = () => {
  const router = useRouter();
  const isLoaded = useSelector((state) => state.auth.isLoaded);
  const user = useSelector((state) => state.auth.user);

  if (user === undefined) {
    return <div>Loading...</div>;
  }
  let sourceIMG;
  if (user?.role === "warrior") {
    sourceIMG = WarriorPic;
  } else if (user?.role === "rogue") {
    sourceIMG = RoguePic;
  } else {
    sourceIMG = WizardPic;
  }

  return (
    <div>
      <img src={sourceIMG} alt="Class" />
      <div className={classes.Dashboard}>
        <h2>Stats table </h2>
        <h5>Class: {user?.role}</h5>
        <h5>Health: {user?.health <= 0 ? 0 : user.health}</h5>
        <h5>Level: {user?.level}</h5>
        <h5>Experience: {user?.experience}</h5>
        <h5>Gold: {user?.gold}</h5>
        <h5>Stamina: {user?.stamina}</h5>
      </div>
    </div>
  );
};

export default statsTable;
