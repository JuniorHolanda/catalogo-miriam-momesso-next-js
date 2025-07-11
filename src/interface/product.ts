export type Product = {
    _id: string;
    title: string;
    thunbnail: string;
    altThunbnail: string;
    smallText: string;
    text: string;
    category: string[];
    measure: string[];
    printing: { arrow: string; _id: string }[];
    gallery: { img: string; altImg: string; _id: string }[];
    studioBrin: string[];
    like: number;
};