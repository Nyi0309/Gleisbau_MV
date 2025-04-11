import { MetadataRoute } from "next";

export default function sitmap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.gleisbau-mv.de/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}