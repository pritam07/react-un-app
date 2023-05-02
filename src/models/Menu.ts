interface MenuParameter {
    fill?: string,
    fontSize?: string
}

export interface MenuModel {
    label: string,
    link: string,
    type: string,
    param: MenuParameter
}