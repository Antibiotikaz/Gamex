import * as types from "../types";
import axios from "axios";

export const attack = ({ userId, health, enemyDamage }) => async (dispatch) => {
  const body = {
    userId,
    health,
    enemyDamage,
  };

  await axios
    .put(`http://localhost:9000/users/attack/${body.userId}`, body)
    .then((res) => {
      dispatch({
        type: types.USER_UPDATES_HEALTH,
        payload: res.data,
      });
    })
    .then(() => {
      axios
        .get(`http://localhost:9000/users/attack/${body.userId}`)
        .then((res) => {
          dispatch({
            type: types.USER_DATA_AFTER_ATTACK,
            payload: res.data,
          });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const spawnEnemy = (enemyID) => async (dispatch) => {
  const body = {
    enemyID,
  };
  console.log(body, "body");
  await axios
    .get(`http://localhost:9000/enemies/spawn/${body.enemyID}`, body)
    .then((res) => {
      dispatch({
        type: types.ENEMY_SPAWNED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getWeather = () => async (dispatch) => {
  await axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?id=598098&appid=b5516378bf01a1077c5f71323ba950ac&units=metric`
    )
    .then((res) => {
      dispatch({
        type: types.GET_WEATHER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
