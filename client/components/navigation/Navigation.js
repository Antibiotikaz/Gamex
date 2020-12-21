import Link from "next/link";
import classes from "./navigation.module.scss";
const navigation = () => {

  
  return (
    <div className={classes.Nav}>
      <ul>
        <li>
          <Link href="/dashboard" as="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/marketplace" as="/marketplace">
            Marketplace
          </Link>
        </li>
        <li>
          <Link href="/arena" as="/arena">
            Battle Arena
          </Link>
        </li>
        <li>
          <Link href="/forum" as="/forum">
            Forum
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
