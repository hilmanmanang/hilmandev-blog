// import { createImageUrlBundler, createCurrentUserHook, createClient } from "next-sanity";

import { createClient } from "next-sanity";

export const config = {
    dataset: "production",
    projectId: "jvyd7e5k",
    apiVersion: "2022-12-04",
    useCdn: true
}

export const sanityClient = createClient(config);
// export const urlFor = (source) => createImageUrlBundler(config).image(source);
// export const useCurrentUser = createCurrentUserHook(config);