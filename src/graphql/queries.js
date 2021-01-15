import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          id,
          name,
          ownerName,
          createdAt,
          fullName,
          reviewCount,
          ratingAverage,
          forksCount,
          stargazersCount,
          description,
          language,
          ownerAvatarUrl
        },
        cursor
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id){
      id,
      name,
      ownerName,
      createdAt,
      fullName,
      reviewCount,
      ratingAverage,
      forksCount,
      stargazersCount,
      description,
      language,
      ownerAvatarUrl,
      url,
      reviews(first: $first, after: $after){
        edges{
          cursor,
          node{
            id,
            rating,
            text,
            createdAt,
            user{
              id,
              username
            }
          }
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query ($includeReviews: Boolean = false){
    authorizedUser {
      id,
      username,
      reviews @include(if: $includeReviews){
        edges {
          cursor,
          node{
            id,
            rating,
            text,
            createdAt,
            user{
              id,
              username
            }
          }
        }
      }
    }
  }
`;
