
const url: string = import.meta.env.VITE_APIURL 
export const config = {
    api: {
        about: `${url}/rules/about`,
        population: `${url}/rules/us_population`,
        menu: `${url}/getMenu`
    }
}