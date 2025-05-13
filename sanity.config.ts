"use client";
import { schemaTypes } from "@/sanity/schemaTypes";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { colorInput } from "@sanity/color-input";

export default defineConfig({
  name: "default",
  title: "portfolio",

  projectId: "435nko8w",
  dataset: "production",
  apiVersion: "2024-01-01",
  basePath: "/admin",

  plugins: [structureTool(), colorInput()],
  schema: { types: schemaTypes },
});
