import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { sanityClient } from '../sanity';
import { Post } from '../typings';

interface Props {
    posts: Post[]
}

export const getServerSideProps = async () => {
    const query = `*[_type == "post"]`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts
        }
    }
}

export default function Home({ posts }: Props) {
    console.log(posts)
    return (
        <div>
            <Head>
                <title>HILMANDEV - Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Banner />

            <div>
                {posts.map((post) => (
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                        <div>{post.title}</div>
                    </Link>
                ))}
            </div>

        </div>
    )
}