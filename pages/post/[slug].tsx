import { GetStaticProps } from 'next';
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import { sanityClient } from '../../sanity';
import { Post } from '../../typings';

interface Props {
    post: Post
}

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        body,
        author
    }`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post
        }

    }
}

export default function PostSlug({ post }: Props) {

    console.log(post)
    return (
        <div>
            <Head>
                <title>HILMANDEV - {post.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {post.title}
        </div>
    )
}