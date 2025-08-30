import React from 'react';
import Banner from '../components/Banner';
import FeaturedRoommate from '../components/FeaturedRoommate';
import { useLoaderData } from 'react-router';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const featuredData = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoommate featuredData={featuredData}></FeaturedRoommate>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;