import { groq } from "next-sanity";
import { NextResponse } from "next/server";
import { client } from "@/sanity/sanity-utils";

export type Skill = {
  _id: string;
  name: string;
  type: string;
  color: string;
  logoUrl: string;
};

const query = groq`
  *[_type == "skill"] | order(order asc) {
    _id,
    name,
    type,
    "color": color.hex,
    "logoUrl": logo.asset->url
  }
`;

export async function GET() {
  try {
    const skills: Skill[] = await client.fetch(query);
    return NextResponse.json({ skills });
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}
