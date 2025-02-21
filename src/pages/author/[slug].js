import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "pageBlogPost" });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.author.fields.slug.replace("/", "") },
  }));
  return { paths, fallback: false };
};
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "componentAuthor",
    "fields.slug": params.slug,
    include: 2, 
  });

  if (!items.length) {
    return { notFound: true };
  }

  const author = JSON.parse(JSON.stringify(items[0]));
  const sanitizedRelatedBlogs = author.fields.relatedBlogs?.map((blog) => ({
    title: blog.fields.title,
    slug: blog.fields.slug,
  })) || [];
  
  return {
    props: {
      author: {
        ...author.fields,
        relatedBlogs: sanitizedRelatedBlogs,
      },
    },
    revalidate: 1,
  };
}

export default function AuthorsDetails({ author }) {
    // console.log(author)
  return (
    <div className="h-full w-full flex items-center flex-col gap-4">
      <img className="h-36 max-sm:h-28" src={author.avatar.fields.file.url} />
      <p className="text-4xl max-sm:text-3xl">{author.name}</p>
      <div className="w-full px-10 flex flex-col gap-3 max-md:px-0 items-center">
        <div className="flex gap-3 items-center max-sm:flex-col">
          <h3 className="text-2xl font-light max-sm:text-xl">Author Name:</h3>
          <p>{author.name}</p>
        </div>
        <div className="flex gap-3 items-center max-sm:flex-col">
          <h3 className="text-2xl font-light max-sm:text-xl">Date of Birth:</h3>
          <p>{author.dateOfBirth}</p>
        </div>
        <div className="flex gap-3 items-center max-sm:flex-col">
          <h3 className="text-2xl font-light max-sm:text-xl">Based In:</h3>
          <p>{author.location}</p>
        </div>
        <div className="flex gap-3 items-center max-sm:flex-col">
          <h3 className="text-2xl font-light max-sm:text-xl">Total Blogs:</h3>
          <p>{author.totalBlogs} blogs</p>
        </div>
        <div className="flex gap-3 items-center h-auto max-md:flex-col max-md:text-center">
          <h3 className="text-2xl font-light max-sm:text-xl">Educational Background:</h3>
          <p>{author.education}</p>
        </div>
        <div className="flex flex-col gap-3 text-center max-w-[800px]">
          <h2 className="text-2xl font-light max-sm:text-xl">Author's Introduction:</h2>
          <p>{author.details}</p>
        </div>
      </div>
    </div>
  );
}