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

export type Category = {
  id: number;
  img: string;
  altImg: string;
  text: string;
  category: string;
  background: string;
  altBackground: string;
};

export type Holiday = {
  id: number;
  category: string;
  start: string;
  end: string;
  img: string;
  altImg: string;
  description: string;
};