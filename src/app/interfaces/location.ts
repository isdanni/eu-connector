export interface Location {
    country: string;
    lat: number;
    lng: number;
    description: string;
    locations: Array<Locations>;
}

export interface Locations {
    name: string;
    lat: number;
    lng: number;
    description: string;
}