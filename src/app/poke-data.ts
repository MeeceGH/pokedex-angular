export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        slot: number;
        type: {
            name: string;
        };
    }[];
}

export interface PokemonList {
    name: string;
    url: string;
}

export interface PokemonListDto {
    count: number;
    next: string;
    previous: null;
    results: {
        name: string;
        url: string;
    }[];
}