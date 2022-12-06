// import { createImageUrlBundler, createCurrentUserHook, createClient } from "next-sanity";

import { createClient, createImageUrlBundler } from "next-sanity";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-12-04",
    useCdn: true
}

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBundler(config).image(source);
// export const useCurrentUser = createCurrentUserHook(config);