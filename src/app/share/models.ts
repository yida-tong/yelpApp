export interface BUSINESS_RES {
  content: BUSINESS_REC[];
  error: boolean;
}

export interface BUSINESS_REC {
    id: string;
    image_url: string;
    name: string;
    rating: number;
    distance: number;
}

export interface BUSINESS_DET {
  id: string;
  name:string;
  address:string;
  categories: string[];
  phone: string;
  price: string;
  url:string;
  photos: string[];
  transactions: string[];
  is_open_now: number;
  coordinates: {latitude: number;longitude:number}
}

export interface BUSINESS_DET_RES {
  content: BUSINESS_DET;
  error: boolean;
}

export interface LocalStorageItem {
  name: string;
  date: string;
  time: string;
  Email: string;
  id?:string;
}

export interface REVIEW {
  rating: string;
  user: string;
  text: string;
  time_created: string;
}


