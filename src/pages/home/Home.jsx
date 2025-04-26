import Banner from "./Banner";
import WhyIBA from "./WhyIBA";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import StatsHome from "./StatsHome";
import Programs from "./Programs";

const Home = () => {

    return (
        <div className="space-y-16">
            <Banner />
            <div className="max-w-5xl mx-auto p-4 space-y-8">
                <WhyIBA />
                <Programs />
                <StatsHome />
                <Reviews />
                <FAQ />
            </div>
            {/* https://www.facebook.com/profile.php?id=61568347791208 */}
        </div>
    );
};
export default Home;