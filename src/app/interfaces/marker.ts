export interface Marker {
}

export interface MarkerEl {
    coordinate: Coordinate;
    markerId: string;
    title: string;
    snippet: string;
}

export interface Coordinate {
    lat: number;
    lng: number;
}