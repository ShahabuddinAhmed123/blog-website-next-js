import Link from "next/link"

export default function BlogCard({ blog }) {
    const {featuredImage, internalName, slug, publishedDate, author} = blog.fields
  return (
    <Link href={'/blog/' + slug}>
    <div className="transform rotate-1 active:">
      <div className="featured">
        <img src={featuredImage.fields.file.url}/>
      </div>
      <div className="bg-[#fff] shadow-sm m-0 relative -top-10 -left-2">
        <div className="p-4">
            <h4 className="my-1 uppercase ">{internalName}</h4>
            <div className="items-center w-full justify-between flex ">
            <p className="m-0 text-[#777]">{author.fields.name}</p>
            <img className="h-[40px]" src={author.fields.avatar.fields.file.url} />
            </div>
            <p className="text-sm text-[#646464]">{publishedDate}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}