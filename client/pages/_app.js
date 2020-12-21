import { Provider } from "react-redux";
import { useStore } from "../store/store";
import { loadUser } from "../store/Actions/authActions";
import {getWeather} from "../store/Actions/userActions"
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  store.dispatch(loadUser());
  store.dispatch(getWeather())
  return (
    <React.Fragment>
      <Head>
        <title>Gamex</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
