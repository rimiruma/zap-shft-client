import HowItWork from "../../assets/HowItWork";
import Features from "../../components/Features";
import HeroSection from "../../components/HeroSection";
import OurServices from "../../components/OurServices";
import Banner from "../Homee/Banner";
import Brand from "../Homee/Brand";
import Reviews from "../Homee/Reviews";


const reviewsPromise = fetch('/reviews.json')
.then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brand></Brand>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Features></Features>
            <HeroSection></HeroSection>
        </div>
    );
};

export default Home;