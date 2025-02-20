import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

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
    revalidate:1,
  };
}

export default function BLogsDetails({ blog }) {
  console.log(blog);
  const {
    featuredImage,
    internalName,
    publishedDate,
    author,
    shortDescription,
    descriptionOne,
    descriptionTwo,
    content
  } = blog.fields;

  return (
    <div className=" w-full h-full">
      <div className="w-full flex h-[500px] mx-auto rounded-tl-3xl rounded-br-3xl bg-[#e9e7e7] shadow-xl shadow-stone-400 max-[990px]:flex-col max-[990px]:h-auto">
        <div className="w-1/2 p-10 flex flex-col justify-center text-base rounded-tl-3xl max-[990px]:w-full max-[440px]:p-3 max-sm:text-sm">
          <div className="flex w-full items-center justify-between max-[440px]:flex-col max-[440px]:items-end">
          <Link href={`/author/${author.fields.slug}`}>
          <div className="flex items-center gap-3 max-[440px]:w-full max-[440px]: justify-between cursor-pointer underline hover:text-stone-400">
              <img
                className="h-[30px]"
                src={author.fields.avatar.fields.file.url}
              />
              <p>{author.fields.name}</p>
            </div>
            </Link>
            <p>{publishedDate}</p>
          </div>
          <h2 className="text-3xl my-4 max-sm:text-xl">{internalName}</h2>
          <p className="text-[#777]">{shortDescription}</p>
          <div className="text-base max-sm:text-sm max-sm:my-3">
            <p>{descriptionOne}</p>
          </div>
        </div>
        <img
          className=" max-[990px]:h-auto rounded-br-3xl"
          src={featuredImage.fields.file.url}
        />
      </div>
        <div className="text-lg p-3 my-3 max-sm:text-base max-sm:p-0 max-sm:my-8">
        <p>{descriptionTwo}</p>
        </div>
        <div className="py-4 px-3 max-sm:px-0">
          <div className="flex flex-col gap-3">{documentToReactComponents(content)}</div>
        </div>
    </div>
  );
}