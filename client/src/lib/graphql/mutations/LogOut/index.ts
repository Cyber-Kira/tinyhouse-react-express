import { gql } from "apollo-boost";

export const LOG_OUT = gql`
  mutation LogOut {
    logOut {
      id
      avatar
      token
      hasWallet
      didRequest
    }
  }
`;
