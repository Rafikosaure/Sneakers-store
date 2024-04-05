interface Picture {
    pic1: string,
    pic2: string,
    pic3: string,
    pic4: string,
    pic5: string,
    pic6: string,
    pic7: string
}

interface Avis {
    stars: number,
    nb: number
}

export interface Sneaker {
    name: string,
    category: string,
    brand: string,
    price: number,
    content: string,
    stock: number,
    online: boolean,
    size: string[],
    avis: Avis,
    picture: Picture[]
}

export type RootState = {
    sneakers: {
        data: Sneaker[]
    }
}

export type initialSneaker = {
    data: Sneaker[],
    loading: boolean | null,
    error: boolean
}