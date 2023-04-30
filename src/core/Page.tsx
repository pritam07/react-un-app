import { use, useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../Routes';
import { PopulationContext } from '../contexts/PopulationContext';

const url: string = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

async function fetchPopulation(url: string) {
    const data = await fetch(url);
    return data.json();
}

const Page = () => {
  const promise = useMemo(() => fetchPopulation(url), [url]);
  let response = use(promise);
  if (response.data) {
        response = response.data.map((val: any) => { return {year: parseInt(val.Year), population: val.Population} });
   }
  return (
  <>
  {response && <PopulationContext.Provider value={response}>
     <RouterProvider router={router} />
  </PopulationContext.Provider>  }
  </>)
};

export default Page;
