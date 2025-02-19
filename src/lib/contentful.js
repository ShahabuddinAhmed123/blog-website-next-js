const contentful = require("contentful");
// import { client } from "@/lib/contentful";

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
}) 

// export const getStaticProps = async () => {
//     const response = await client.getEntries({ content_type: "pageBlogPost" });
  
//     return{
//       props: {
//         blogs: response.items,
//         revalidate: 70,
//       }
//     }
//   }