import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import StatsTable from '../../components/statsTable/StatsTable';
const dashboard = () => {
  const router = useRouter();
  const isLoaded = useSelector((state) => state.auth.isLoaded);
  const user = useSelector((state) => state.auth.user)



  return (
    <div>
 
      <Navigation />
      <h1>Hello Heroe {user?.email}!</h1>
      <StatsTable/>

    </div>
  );
};

export default dashboard;
