import { createClient } from "contentful";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "pageBlogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug": params.slug,
  });
  return {
    props: { blog: items[0] },
  };
}

export default function RecepieDetails({ blog }) {
  console.log(blog);
  const {
    featuredImage,
    internalName,
    publishedDate,
    author,
    shortDescription,
    title,
    content,
  } = blog.fields;
  return (
    <div className=" w-full h-full">
      <div className="w-full flex h-[500px] mx-auto border border-black rounded-3xl bg-[#d4d4d4]">
        <div className="w-1/2 p-10 flex flex-col justify-center text-base">
            <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
                <img className="h-[30px]" src={author.fields.avatar.fields.file.url}/>
            <p>{author.fields.name}</p>
            </div>
                <p>{publishedDate}</p>
            </div>
            <h2 className="text-3xl my-4">{internalName}</h2>
            <p className="text-[#777]">{shortDescription}</p>
        </div>
        <img className="blog-image h-full rounded-tr-3xl rounded-br-3xl" src={featuredImage.fields.file.url} />
      </div>
      {/* <div className="">
        <p className="text-3xl">
            {content?.content?.content?.value}
        </p>
      </div> */}
    </div>
  );
}
