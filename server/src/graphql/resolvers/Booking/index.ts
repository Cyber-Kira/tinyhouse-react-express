import { IResolvers } from "apollo-server-express";
import { Booking, Database, Listing } from "../../../lib/types";

export const bookingsResolvers: IResolvers = {
  Booking: {
    id: (booking: Booking): string => {
      return booking._id.toString();
    },
    listing: (
      booking: Booking,
      _args: Record<string, never>,
      { db }: { db: Database }
    ): Promise<Listing | null> => {
      return db.listings.findOne({ _id: booking.listing });
    },
  },
};
