import Head from 'next/head';

const Layout = ({ children }) => {
    return (<>
        <Head>
            <title>Listings | LazyLoading | SWR</title>
        </Head>
        {children}
    </>)
}

export default Layout;