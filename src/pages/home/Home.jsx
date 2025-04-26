import Banner from "./Banner";
import WhyIBA from "./WhyIBA";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import StatsHome from "./StatsHome";

const Home = () => {

    return (
        <div className="space-y-16">
            <Banner />
            <WhyIBA />
            <StatsHome />
            <Reviews />
            <FAQ />
            {/* https://www.facebook.com/profile.php?id=61568347791208 */}
            <div className="h-screen"></div>
        </div>
    );
};
export default Home;