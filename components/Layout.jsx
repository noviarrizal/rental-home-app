import Head from 'next/head';
import  Link  from 'next/link';
import { Box, Flex, Button } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useUser } from "@auth0/nextjs-auth0";

const Layout = ({ children }) => {
    const { user, error, isLoading } = useUser();
    if(user) {
        return(
            <>
                <Head>
                    <title>Real Estate</title>
                </Head>
                <Box maxWidth="1280px" m="auto">
                    <header>
                        <Navbar />
                    </header>
                    <main>
                        {children}
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </Box>
            </>
        )
    }

    return (
        <>
            <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                marginTop="5"
                marginBottom="5"
            >
                <Box>
                    <Button>
                        <Link href="/api/auth/login">Login</Link>
                    </Button>
                </Box>
            </Flex>
        </>
    )
}

export default Layout;