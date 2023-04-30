import { use } from "react";
import Main from "../core/Main";
import CustomizedTables from "../components/CustomizedTables";
import { PopulationContext } from "../contexts/PopulationContext";

const Home = () => {
  const response = use(PopulationContext);
  return (
  <>
  <Main />
  {response && <CustomizedTables response={response}/>}
  </>
  )
};

export default Home;