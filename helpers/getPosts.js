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
              featuredImage {
                node {
                  altText
                  link
                  sourceUrl
                }
              }

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

export async function getPostsBySlug() {
  const res = await client.query({
    query: gql`
      query mainquery {
        posts(first: 1000, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            slug
          }
        }
      }
    `,
  });
  return res;
}
export async function getPost(slug) {
  const res = await client.query({
    query: gql`
      query mainquery($slug: String!) {
        postBy(slug: $slug) {
          id
          title
          date

          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }

          seo {
            metaDesc
            title
            fullHead
          }
          tags {
            nodes {
              name
              id
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  return res;
}

// get posts for android games page
export async function getPostsByCategory(categoryName) {
  const res = await client.query({
    query: gql`
      query mainquery($categoryName: String!) {
        posts(
          first: 100
          where: {
            categoryName: $categoryName
            orderby: { field: DATE, order: DESC }
          }
        ) {
          edges {
            node {
              title
              excerpt
              slug
              date
              postId
              featuredImage {
                node {
                  altText
                  link
                  sourceUrl
                }
              }

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
    variables: { categoryName },
  });

  return res;
}

// export async function getPostsTags() {
//   const res = await client.query({
//     query: gql`
//       query mainquery {
//         posts(first: 1000, where: { orderby: { field: DATE, order: DESC } }) {
//           nodes {
//             tags
//           }
//         }
//       }
//     `,
//   });
//   return res;
// }

// export async function getPostByTag(tag) {
//   const res = await client.query({
//     query: gql`
//     query bySlug($tag: String! ) {
//       posts(where: {tag: $tag}) {
//         edges {
//           node {
//             id
//             date
//             excerpt
//             slug
//             featuredImage {
//               node {
//                 altText
//                 sourceUrl
//               }
//             }
//           }
//         }
//       }
//     }
//     `,
//     variables: { tag },
//   });

//   return res;
// }
