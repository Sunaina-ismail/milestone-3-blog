import Link from "next/link";
import Image from "next/image";
import { Blog } from "../types/blog";

const blogs: Blog[] = [
  {
    id: "1",
    title: "Serum Spotlight",
    image: "/nervana-serum.jpg",
    description:
      "Discover the transformative benefits of serums and how they can elevate your skincare routine.",
    content: "",
  },
  {
    id: "2",
    title: "Hair Serums",
    image: "/hair-serum.webp",
    description:
      "Hair serums nourish, protect, and smooth, enhancing shine, controlling frizz, and boosting your hair's natural beauty.",
    content: "",
  },

  {
    id: "3",
    title: "Facial Masks",
    image: "/mask-2.avif",
    description:
      "Explore how skincare masks have evolved, from basic treatments to cutting-edge solutions for every skin concern.",
    content: "",
  },
  {
    id: "4",
    title: "Shampoo and Conditioners",
    image: "/shampoo-conditioner.avif",
    description:
      "Discover how shampoo and conditioner technology has evolved, offering more than just basic cleansing for healthier, shinier hair.",
    content: "",
  },
  {
    id: "5",
    title: "Facial Cleansers",
    image: "/cleanser-1.jpg",
    description:
      "Explore how facial cleansers have evolved from basic soaps to advanced, skin-specific formulas.",
    content: "",
  },
  {
    id: "6",
    title: "Beauty Tools",
    image: "/tools.jpg",
    description:
      "Discover the evolution of beauty tools, from manual tools to high-tech skincare devices that enhance results.",
    content: "",
  },
];

export default function Blogs() {
  return (
    <main className="container mx-auto px-4 py-16  rounded-md ">
      <h1 className="text-4xl font-bold font-serif mb-8  text-center  ">
        Our Blogs
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="border rounded-lg bg-white border-orange-400 shadow hover:shadow-lg hover:shadow-orange-300 transition">
              <div className="relative w-full h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-fill rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl text-orange-600 font-serif font-semibold">
                  {blog.title}
                </h2>
                <p className="text-gray-600  text-sm">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
