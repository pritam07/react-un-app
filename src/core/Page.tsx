import { use } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../Routes';
import { AboutContext, MenuContext, PopulationContext } from '../contexts/Contexts';
import { config } from '../config';

const cachedFetches: any = {};
const cachedFetch = (url: string) => {
  if (!cachedFetches[url]) {
    cachedFetches[url] = fetch(url).then(async (res) => (await res.json()));
  }
  return cachedFetches[url];
};

const Page = () => {
  const menuResponse = use(cachedFetch(`${config.api.menu}?locale=en`));
  const aboutResponse = use(cachedFetch(config.api.about));
  let populationResponse: any = use(cachedFetch(config.api.population));
  if (populationResponse.data) {
    populationResponse = populationResponse.data.map((val: any) => { return {year: parseInt(val.Year), population: val.Population} });
   }
  return (
  <>
  { populationResponse && 
  <PopulationContext.Provider value={populationResponse}>
    { menuResponse && 
    <MenuContext.Provider value={menuResponse}>
        {aboutResponse &&  
            <AboutContext.Provider value ={aboutResponse}>
                <RouterProvider router={router} />
            </AboutContext.Provider>
        }
        </MenuContext.Provider> 
     }
   </PopulationContext.Provider>  
   }
  </>)
};

export default Page;
