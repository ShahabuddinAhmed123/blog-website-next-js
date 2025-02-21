import Link from "next/link";

export default function BlogCard({ blog }) {
  const { featuredImage, internalName, slug, publishedDate, author } =
    blog.fields;
  return (
    <Link href={"/blog/" + slug}>
      <div className=" shadow-lg shadow-stone-300 hover:shadow-md transform max-sm:mb-10 transition-all duration-200 active:scale-[0.990] hover:scale-[1.01] h-fit p-5 bg-gray-100 rounded-lg border max-sm:p-0">
        <div className="">
          <img
            className="h-80 w-full object-cover max-md:h-auto rounded-t-lg"
            src={featuredImage.fields.file.url}
          />
        </div>
        <div className="bg-[#fff] m-0  rounded-b-lg">
          <div className="p-4 max-sm:p-2">
            <h4 className="my-1 uppercase ">{internalName}</h4>
            <div className="items-center w-full justify-between flex ">
              <p className="m-0 text-[#777] max-sm:text-sm">
                {author.fields.name}
              </p>
              <img
                className="h-[40px]"
                src={author.fields.avatar.fields.file.url}
              />
            </div>
            <p className="text-sm text-[#646464]">{publishedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}