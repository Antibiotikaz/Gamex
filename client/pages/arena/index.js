import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { attack, spawnEnemy, wonBattle,statsReset } from "../../store/Actions/userActions";
import classes from "./arena.module.scss";
import Navigation from "../../components/navigation/Navigation";
import StatsTable from "../../components/statsTable/StatsTable";
import { updateEnemyHealth,resetEnemyHealth } from "../../store/Actions/enemyActions";
import Swal from "sweetalert2";
import GoblinImg from "../../components/assets/images/goblin.png";
import OrcImg from "../../components/assets/images/orc.png";
const Arena = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = useSelector((state) => state.auth?.user?.id);
  const health = useSelector((state) => state.auth?.user?.health);
  const email = useSelector((state) => state.auth?.user?.email);
  const userExp = useSelector((state) => state.auth?.user?.experience);
  const isSpawned = useSelector((state) => state?.enemy?.isSpawned);
  let enemyID = useSelector((state) => state?.enemy?.enemy?.id);
  let enemyHealth = useSelector((state) => state?.enemy?.enemy?.health);
  const enemyDamage = useSelector((state) => state?.enemy?.enemy?.damage);
  const enemyName = useSelector((state) => state?.enemy?.enemy?.name);

  const damage = 100;

  const spawnEnemyClick = () => {
    let randomEnemy = Math.floor(Math.random() * 2);
    console.log(randomEnemy, "random");
    switch (randomEnemy) {
      case 0:
        enemyID = "5f4feb04fe6c9531fb739f09";
        return dispatch(spawnEnemy(enemyID));
      case 1:
        enemyID = "5f8350b47db530b225987ca7";
        return dispatch(spawnEnemy(enemyID));
      default:
        return console.log("Defaultas");
    }
  };

  let body = {
    userId,
    health,
    enemyDamage,
    enemyID,
    enemyHealth,
    damage,
  };

  let attackData = {
    enemyID,
    enemyHealth,
    damage,
  };

  const beginAttack = () => {
    dispatch(attack(body));
    dispatch(updateEnemyHealth(attackData));
  };
  if (enemyHealth <= 0) {
    let battleStatBody = {
      enemyID,
      userId,
    }
    dispatch(wonBattle(battleStatBody));
    Swal.fire({
      title: "You won hero!",
      text: `${enemyName} was killed`,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Go back to town!',
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    }).then((result) => {
      if (result.isConfirmed) {
        let resetEnemyBody = {
          enemyID
        }
        dispatch(resetEnemyHealth(resetEnemyBody))
        router.reload();
      }
    });
  }  else {
    console.log('belekas')
  }

  //IF hero died
  if (health <= 0) {
   
    Swal.fire({
      title: "You are dead heroe!",
      text: `${email}, was brutaly wounded and got into hospital`,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Go back to town!',
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    }).then((result) => {
      if (result.isConfirmed) {
        let resetBody = {
          userId
        };
        dispatch(statsReset(resetBody));
        router.reload();
      }
    });
  }

  return (
    <div>
      <Navigation />
      <StatsTable />
      {isSpawned ? (
        <button onClick={() => beginAttack()}>Attack!</button>
      ) : null}
      <button onClick={() => spawnEnemyClick()}>Find an enemy!</button>

      <div className={classes.EnemyBox}>
        <div>
          <h2>Enemy table </h2>
          <h5>name: {enemyName}</h5>
          <h5>Health:{enemyHealth <= 0 ? 0 : enemyHealth} </h5>
          <h5>Damage: {enemyDamage}</h5>
        </div>
        <div>
          {enemyName === "Goblin" ? (
            <img src={GoblinImg} alt="Goblin" />
          ) : (
            <img src={OrcImg} alt="Orc" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Arena;
