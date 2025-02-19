import { createClient } from "contentful";
import BlogCard from "@/components/BlogCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
const res = await client.getEntries({ content_type: "pageBlogPost" })
return{
  props:{
    blogData: res.items
  }
}
}

export default function Page({ blogData }) {
  // console.log(blogData)
  return (
      <div className="w-[70%] mx-auto grid grid-cols-2 gap-10">
        {blogData.map(blog => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </div>
  );
}