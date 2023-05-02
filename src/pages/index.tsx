import { use } from "react";
import Main from "../core/Main";
import CustomizedTables from "../components/CustomizedTables";
import { AboutContext, PopulationContext } from "../contexts/Contexts";
import { useLocation } from "react-router-dom";
import BarChart from "../components/charts/BarChart";
import { About } from "../models/About";
import { Population } from "../models/Population";

const TableOrChart = (props: any) => {
  if (props.state.type === 'table') {
    return (<CustomizedTables response={props.populationResponse}/>)
  } else if (props.state.type === 'chart') {
    return (<BarChart data={props.populationResponse} state={props.state}/>)
  } else {
    return (null)
  }
}


const Home = () => {
  let populationResponse!: Population;
  let aboutResponse!: About;
  const {state} = useLocation();
  if (state && (state.type === 'chart' || state.type === 'table')) {
    populationResponse = use(PopulationContext);
  } else if (state && state.type === 'text') {
    aboutResponse = use(AboutContext);
  }
  return (
  <>
  <Main />
  {populationResponse && <TableOrChart state={state} populationResponse={populationResponse}/>}
  {aboutResponse && state.type === 'text' ? <p style={state.param}>{aboutResponse.description}</p> : null}
  {!populationResponse && !aboutResponse && <h3>Welcome To Population App</h3>}
  </>
  )
};

export default Home;