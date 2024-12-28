import Image from "next/image";
import { Blog } from "../types/blog";

interface BlogDetailsProps {
  blog: Blog;
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
  return (
    <div>
      <div className="relative w-full h-72 md:h-96 object-fill mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl border-white border"
        />
      </div>
      <h1 className="text-2xl md:text-3xl text-orange-500 font-serif font-semibold mb-4">
        {blog.title}
      </h1>

      <p className="text-md md:text-lg  text-gray-800">{blog.content}</p>
    </div>
  );
}
