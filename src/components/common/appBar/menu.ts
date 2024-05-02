

export interface MenuDetails {
    id:number,
    icon: any,
    label: string
    url: string
}

export interface Menu {
    id:number,
    icon: any,
    label: string,
    url?: string
    subMenu?: Array<MenuDetails>
}


