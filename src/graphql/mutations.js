import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
  mutation Authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }){
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation (
    $repositoryName: String!,
    $ownerName: String!,
    $rating: Int!,
    $text: String
  ){
    createReview(review: {
      repositoryName: $repositoryName,
      ownerName: $ownerName,
      rating: $rating,
      text: $text
    }) {
      id,
      userId,
      repositoryId,
      rating,
      createdAt,
      text
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($user: CreateUserInput){
    createUser(user: $user) {
      id,
      username
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($reviewId: ID!){
    deleteReview(id: $reviewId)
  }
`;