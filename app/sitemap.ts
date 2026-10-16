import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/airbnb", "/pricing", "/about", "/careers", "/book"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
