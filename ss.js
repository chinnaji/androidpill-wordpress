// query mainquery {
//     posts(where: {in: [2162, 2436, 1948, 1324, 2870]}) {
//       edges {
//         node {
//           title
//           excerpt
//           slug
//           date
//           postId
//           categories {
//             edges {
//               node {
//                 name
//                 link
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//   }

// {
//   "data": {
//     "posts": {
//       "edges": [
//         {
//           "node": {
//             "title": "Download Score Hero 2  Mod (Unlimited Energy + Cash)",
//             "excerpt": "<p>Score hero 2 mod, score hero 2 cheat, Score hero 2 mod APK, Score! Hero&#8230;</p>\n",
//             "slug": "download-score-hero-2-mod-unlimited-energy-cash",
//             "date": "2021-04-12T22:15:35",
//             "postId": 2162,
//             "categories": {
//               "edges": [
//                 {
//                   "node": {
//                     "name": "Android Games",
//                     "link": "https://www.androidpill.com/category/android-games/",
//                     "slug": "android-games"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "node": {
//             "title": "Download Pes 2022 Ppsspp (pes 2022 Psp Iso) + Cool Ps5 Camera",
//             "excerpt": "<p>PES 2022 (pro evolution soccer 22) is being developed and published by Konami. Pro Evolution&#8230;</p>\n",
//             "slug": "download-pes-2022-ppsspp-pes-2022-psp-iso-cool-ps5-camera",
//             "date": "2021-07-07T14:35:37",
//             "postId": 2436,
//             "categories": {
//               "edges": [
//                 {
//                   "node": {
//                     "name": "Android Games",
//                     "link": "https://www.androidpill.com/category/android-games/",
//                     "slug": "android-games"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "node": {
//             "title": "Download GTA 6 Mobile  Apk For Android (works on all devices)",
//             "excerpt": "<p>Download GTA 6 Mobile apk no verification required, Gta 6 Mobile Latest release. The wait&#8230;</p>\n",
//             "slug": "download-gta-6-mobile-apk-for-android-works-on-all-devices",
//             "date": "2021-03-31T10:08:03",
//             "postId": 1948,
//             "categories": {
//               "edges": [
//                 {
//                   "node": {
//                     "name": "Android Games",
//                     "link": "https://www.androidpill.com/category/android-games/",
//                     "slug": "android-games"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "node": {
//             "title": "DOWNLOAD 100 BEST PPSSPP GAMES 2021 (Highly Compressed)",
//             "excerpt": "<p>In this post, we&#8217;ve provided direct links(NO ADS !) to over 100+ of your favorite&#8230;</p>\n",
//             "slug": "download-100-best-ppsspp-games-2021-highly-compressed",
//             "date": "2021-03-01T16:21:28",
//             "postId": 1324,
//             "categories": {
//               "edges": [
//                 {
//                   "node": {
//                     "name": "Android Games",
//                     "link": "https://www.androidpill.com/category/android-games/",
//                     "slug": "android-games"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         {
//           "node": {
//             "title": "Download Spiderman Miles Morales PS5  APK 2022",
//             "excerpt": "<p>Spiderman Miles Morales PS5 APK 2022 in the latest adventure in the Marvel’s Spider-Man universe,&#8230;</p>\n",
//             "slug": "download-spiderman-miles-morales-ps5-apk-2022",
//             "date": "2022-02-10T00:01:38",
//             "postId": 2870,
//             "categories": {
//               "edges": [
//                 {
//                   "node": {
//                     "name": "Android Games",
//                     "link": "https://www.androidpill.com/category/android-games/",
//                     "slug": "android-games"
//                   }
//                 }
//               ]
//             }
//           }
//         }
//       ]
//     }
//   },
//   "extensions": {
//     "debug": []
//   }
// }

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              sourceUrl
            }
            author {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}
