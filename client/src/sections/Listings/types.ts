interface Listing {
  id: string;
  title: string;
  address: string;
  image: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export interface ListingsData {
  listings: Listing[];
}
