import PopularPicks from "../components/home/PopularPicks";
import Preferences from "../components/home/Preferences";
import Reviews from "../components/home/Reviews";
import Slider from "../components/home/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularPicks></PopularPicks>
            <Preferences></Preferences>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;