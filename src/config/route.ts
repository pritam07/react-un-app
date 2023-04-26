export interface Route {
    link: string,
    linkText: string
}

export const routes: Route[] = [
    {
        linkText: 'US Population table',
        link: '/',
        
    },
    {
        linkText: 'US Population chart',
        link: '/chart',
    },
    {   
        linkText: 'About',
        link: '/about',
        
    }
]