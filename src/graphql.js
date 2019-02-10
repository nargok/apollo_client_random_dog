import gql from 'graphql-tag';

export const GET_SINGLE_RANDOM_DOG = gql`
  {
    randomDog {
      image
    }
  }
`;

