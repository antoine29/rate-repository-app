import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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

export const AUTHORIZE = gql`
  mutation Authorize($username: String!, $password: String!) {
      authorize(
        credentials: { username: $username, password: $password }
      )
      {
        accessToken
      }
    }
`;