"use client";

import BlogDetails from "@/app/components/BlogDetail";
import CommentsSection from "@/app/components/CommentsSection";
import { Blog } from "@/app/types/blog";
import { useState } from "react";

import { use } from "react";

const blogs: Blog[] = [
  {
    id: "1",
    title: "Serum Spotlight",
    image: "/serum-image.jpg",
    description: "",
    content:
      "Serums are the powerhouse of modern skincare, designed to target specific concerns with concentrated ingredients. Whether you're tackling fine lines, dullness, or stubborn blemishes, serums deliver potent solutions directly to your skin. In this article, we'll explore the magic of serums, the different types available, and tips for selecting the perfect one for your skin type. Learn how Nervana Serum, featured in this post, can revolutionize your skincare routine with its advanced formula designed to hydrate, brighten, and rejuvenate.",
  },
  {
    id: "2",
    title: "Hair Serums",
    image: "/hair-serum-1.webp",
    description: "",
    content:
      "Hair care technology has evolved dramatically, introducing advanced formulas designed to tackle various hair concerns. Hair serums are a cornerstone of this transformation, providing nourishment, frizz control, and protection against environmental damage. In this article, we delve into the world of hair serums, exploring their benefits and how they work to enhance shine and manageability. Discover how products like Nervana Hair Serum offer cutting-edge solutions with ingredients that restore, protect, and transform your hair into its healthiest state.",
  },

  {
    id: "3",
    title: "Facial Masks",
    image: "/mask.avif",
    description: "",
    content:
      "Skincare masks have been a staple in beauty routines for centuries, but in recent years, they have undergone a revolutionary transformation. What was once limited to simple hydrating or detoxifying masks has now evolved into high-tech treatments with specialized formulas for a wide range of skin concerns. From sheet masks infused with innovative serums to overnight masks that work while you sleep, the skincare mask industry has embraced technology in ways we never imagined. In this article, we delve into the evolution of skincare masks, highlighting their growing effectiveness and the role of ingredients like hyaluronic acid, peptides, and botanical extracts. ",
  },
  {
    id: "4",
    title: "Shampoo and Conditioners",
    image: "/shampoo.avif",
    description: "",
    content:
      "Shampoo and conditioner have long been essential to our hair care routines, but in recent years, they have evolved into more sophisticated and effective formulas designed to address a variety of hair concerns. What once started as basic cleansing agents has transformed into a science-backed duo that targets issues like dryness, frizz, and even scalp health. From sulfate-free options to customizable formulas, the evolution of shampoo and conditioner technology reflects the growing demand for personalized hair care. In this article, we explore the latest innovations in hair care, featuring products like Nervana Shampoo and Conditioner, which are formulated to nourish, repair, and enhance hair health with cutting-edge technology and ingredients.",
  },
  {
    id: "5",
    title: "Facial Cleansers",
    image: "/face-cleanser.webp",
    description: "",
    content:
      "Facial cleansing has always been a cornerstone of any skincare routine, but the cleansers we use today are far more advanced than the simple soap bars of the past. Over the years, cleansers have transformed to cater to different skin types and needs, from gentle micellar waters to foam cleansers that remove impurities without stripping the skin. In this article, we'll dive into the evolution of facial cleansers, focusing on how ingredients, formulations, and new technologies are enhancing the cleansing experience for every skin type. Learn how the Nervana Cleanser, featured in this post, is designed to cleanse, hydrate, and nourish, leaving the skin refreshed without compromising its natural barrier.",
  },
  {
    id: "6",
    title: "Beauty Tools",
    image: "/skin-tools.avif",
    description: "",
    content:
      "Beauty tools have been a part of self-care routines for centuries, but the recent wave of technological advancements has completely transformed the industry. From manual facial rollers to innovative tools like LED masks and microcurrent devices, modern beauty tools are designed to target specific skincare concerns with precision and efficiency. These tools, powered by the latest technologies, offer professional-level results at home, helping individuals achieve glowing, youthful skin without the need for invasive treatments. In this article, we explore the fascinating journey of beauty tools and how innovations in devices are making it easier to achieve salon-quality results at home. Learn how products like the Nervana Beauty Tool are incorporating smart technology to deliver personalized skincare solutions for a wide range of skin types.",
  },
];

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export default function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = use(params);
  const blog = blogs.find((b) => b.id === resolvedParams.id);
  const [comments, setComments] = useState<string[]>([]);

  if (!blog) {
    return <p className="text-center mt-8">Blog not found</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <BlogDetails blog={blog} />
      <CommentsSection comments={comments} setComments={setComments} />
    </main>
  );
}
