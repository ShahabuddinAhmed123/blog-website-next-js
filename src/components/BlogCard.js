import Link from "next/link"

export default function BlogCard({ blog }) {
    const {featuredImage, internalName, slug, publishedDate, author} = blog.fields
  return (
    <Link href={'/blog/' + slug}>
    <div className="transform rotate-1 active:scale-[0.996] hover:scale-[1.005] h-fit">
      <div className="shadow-xl shadow-stone-500">
        <img src={featuredImage.fields.file.url}/>
      </div>
      <div className="bg-[#fff] m-0 relative -top-10 -left-2 shadow-xl shadow-stone-400">
        <div className="p-4 max-sm:p-2">
            <h4 className="my-1 uppercase ">{internalName}</h4>
            <div className="items-center w-full justify-between flex ">
            <p className="m-0 text-[#777] max-sm:text-sm">{author.fields.name}</p>
            <img className="h-[40px]" src={author.fields.avatar.fields.file.url} />
            </div>
            <p className="text-sm text-[#646464]">{publishedDate}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}