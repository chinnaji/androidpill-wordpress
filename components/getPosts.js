import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://androidpill.com/graphql",
  cache: new InMemoryCache(),
});
export async function getAllPostsForHome() {
  const res = await client.query({
    query: gql`
      query mainquery {
        posts(first: 71, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              postId
              categories {
                edges {
                  node {
                    name
                    link
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return res?.data.posts.edges;
}

export async function getHomepageHeroPosts() {
  const res = await client.query({
    query: gql`
      query mainquery {
        posts(where: { in: [2162, 2436, 1948, 1324, 2870] }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              postId
              categories {
                edges {
                  node {
                    name
                    link
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return res;
}
