import React, { useContext } from "react"
import ErrorCenterContext from "../Context/ErroCenterContext";
import AsideDashboard from "../Component/AsideDashBoard";
import ErrorList from "../Component/ErrorList";
import MainHeader from "../Component/MainHeader";
import "../Css/dashboard.css";
import Infografics from "../Component/infographics";

const Dashboard = () => {
  const { renderDash } = useContext(ErrorCenterContext);
  // const [dashboardStatus, setDashboardStatus] = useState();

  // useEffect(() => {
  //   setDashboardStatus(renderDash)
  // }, [renderDash])
  
  return(
    <div className="dashboard-container">
      <MainHeader />
      <hr />
      <section>
        <div className="aside-container">
          <AsideDashboard />
        </div>
        { (renderDash === "error-list") && <ErrorList /> }
        { (renderDash === "graphics") && <Infografics /> }
      </section>
    </div>
  );
}

export default Dashboard;