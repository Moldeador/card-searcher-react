
export interface ImageURIS {
    small: string;
    normal: string;
    large: string;
}

export interface CardInfo {
    name: string;
    flavour_text: string;
    image_uris: ImageURIS;
    card_faces?: Array<CardInfo>;
}