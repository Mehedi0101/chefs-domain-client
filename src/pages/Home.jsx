import PopularPicks from "../components/home/PopularPicks";
import Reviews from "../components/home/Reviews";
import Slider from "../components/home/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularPicks></PopularPicks>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;