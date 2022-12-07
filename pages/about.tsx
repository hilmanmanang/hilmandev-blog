import Head from "next/head";
import Header from "../components/Header";

export default function AboutPage() {
    return <div>
            <Head>
                <title>HILMANDEV - About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <div className="m-6">Hi, I am Muhammad Hilman Bin Ahmad from Malaysia. I am a creator of this HilmanDev. Nice to meet you.</div>
        </div>
}