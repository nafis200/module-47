import Featurejob from "../Feature/Featurejob";
import Banner from "../banner/Banner";
import Category from "../category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featurejob></Featurejob>
        </div>
    );
};

export default Home;