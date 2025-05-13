import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "@/sanity/sanity-utils";

export type Project = {
  _id: string;
  title: string;
  order: number;
  image?: string;
  shortDescription?: string;
  description?: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  color?: string;
  technologies?: {
    _id: string;
    name: string;
    type: string;
    color: string;
    logoUrl: string;
  }[];
};

const query = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    order,
    "image": image.asset->url,
    shortDescription,
    description,
    featured,
    githubUrl,
    liveUrl,
    "color": color.hex,
    technologies[]->{
      _id,
      name,
      type,
      "color": color.hex,
      "logoUrl": logo.asset->url
    }
  }
`;

export async function GET() {
  try {
    const projects: Project[] = await client.fetch(query);
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
