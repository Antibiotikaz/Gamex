import * as types from "../types";
import axios from "axios";


export const updateEnemyHealth = ({enemyID, enemyHealth, damage }) => async (dispatch) => {
    const body = {
        enemyID,
        enemyHealth,
        damage,
    };
    
    await axios
      .put(
        `http://localhost:9000/enemies/update/health/${body.enemyID}`,
        body
      )
      .then((res) => {
        dispatch({
          type: types.UPDATE_ENEMY_HEALTH,
             payload: res.data,
        });
      })
      .catch((err) => {
            console.log(err);
      });
  };

  export const resetEnemyHealth = ({enemyID }) => async (dispatch) => {
    const body = {
        enemyID,
    };
    
    await axios
      .put(
        `http://localhost:9000/enemies/health/updateAfterHit/${body.enemyID}`,
        body
      )
      .then((res) => {
        dispatch({
          type: types.ENEMY_STATS_RESET,
             payload: res.data,
        });
      })
      .catch((err) => {
            console.log(err);
      });
  };