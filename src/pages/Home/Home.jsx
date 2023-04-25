import React from 'react'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import SupportEngine from '../../components/SupportEngine/';
import { Advantages, HowWorks, Hero, FrequentlyAsk, BestTherapist, QuizShow, Reviews, Helps } from '../Home/components';

const Home = () => {
    return (
        <>
            <SupportEngine />
            <Hero />
            <SocialMedia/>
            <BestTherapist />
            <HowWorks />
            <Advantages />
            <QuizShow />
            <Reviews />
            <Helps />
            <FrequentlyAsk />
        </>
    )
}

export default Home