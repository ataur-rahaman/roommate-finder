import React from 'react';
import Banner from '../components/Banner';
import FeaturedRoommate from '../components/FeaturedRoommate';
import { useLoaderData } from 'react-router';

const Home = () => {
    const featuredData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoommate featuredData={featuredData}></FeaturedRoommate>
        </div>
    );
};

export default Home;