import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "435nko8w",
  dataset: "production",
  apiVersion: "2024-01-01",
});
