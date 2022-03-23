export interface Hotel {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  starRating: number;
  address1: string;
  address2: string;
}

export interface Colors {
  orange: string;
  gray: string;
}
