import ReviewCard from "@/myComponents/review/ReviewCard";
import Banner from "./Banner";
import WhyIBA from "./WhyIBA";

const Home = () => {

    return (
        <div className="space-y-16">
            <Banner />
            <WhyIBA />
            <div className="grid sm:grid-cols-2 gap-4">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            {/* https://www.facebook.com/profile.php?id=61568347791208 */}
            <div className="h-screen"></div>
        </div>
    );
};
export default Home;