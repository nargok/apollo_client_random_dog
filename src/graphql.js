import gql from 'graphql-tag';

export const GET_SINGLE_RANDOM_DOG = gql`
  {
    randomDog {
      image
    }
  }
`;

export const HUSKY_IMAGES = gql`
  {
    huskyCrazy {
      status
      images
    }
  }
`;