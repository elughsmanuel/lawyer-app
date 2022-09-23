import Head from "next/head";
import HomePage from "../components/Homepage/Homepage";

const Index = () => {
    return ( 
        <div>
            <Head>
                <title>Lawyer Up | Homepage</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin / >
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.css"/>
            </Head>
            <HomePage />
        </div>
     );
}

export default Index;