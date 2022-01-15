import React from "react";
import { server } from "../../lib/api";
import { ListingsData } from "./types";

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      address
      image
      price
      numOfGuests
      numOfBeds
      numOfBaths
      rating
    }
  }
`;

interface Props {
  title: string;
}

export const Listings = ({ title }: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data.listings);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={fetchListings}>Get Listings</button>
    </div>
  );
};
