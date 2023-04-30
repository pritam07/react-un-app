import { use, useState } from 'react'
import Main from '../core/Main'
import { PopulationContext } from '../contexts/PopulationContext';
import BarChart from '../components/charts/BarChart';
import { Population } from '../models/Population';

function Chart() {
  const response: Population[] = use(PopulationContext);
  return (
    <>
      <Main />
      <BarChart data={response} />
    </>
  )
}

export default Chart
