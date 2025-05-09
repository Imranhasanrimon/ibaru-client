import Banner from "./Banner";
import WhyIBA from "./WhyIBA";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import StatsHome from "./StatsHome";
import Programs from "./Programs";

const Home = () => {

    return (
        <>
            <Banner />
            <div className="max-w-5xl mx-auto p-4 space-y-16">
                <WhyIBA />
                <Programs />
                <StatsHome />
                <Reviews />
                <FAQ />
            </div>
        </>
    );
};
export default Home;