import quality from "../../assets/preferences/quality-ingredients.png";
import flavor from "../../assets/preferences/exceptional-flavors.png";
import satisfaction from "../../assets/preferences/customer-satisfaction.png";
import luxury from "../../assets/preferences/affordable-luxury.png";

const Preferences = () => {
    return (
        <div className="md:px-10 px-5 mt-28 select-none max-w-screen-2xl mx-auto">
            <h2 className={`md:text-4xl text-3xl font-bold text-center mb-10 text-black`}>Our Main Preferences</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between`}>
                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <img className="w-28 mx-auto" src={quality} alt="" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Quality Ingredients</h3>
                    <p className={`text-center mt-3`}>At Chef&apos;s Domain, quality ingredients are our top preference. We source the finest and freshest ingredients to ensure the highest culinary standards in every dish.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <img className="w-28 mx-auto" src={flavor} alt="" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Exceptional Flavors</h3>
                    <p className={`text-center mt-3`}>Our top preference is to deliver exceptional flavors with every meal. We take pride in crafting dishes that tantalize your taste buds and leave a lasting impression.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <img className="w-28 mx-auto" src={satisfaction} alt="" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Customer Satisfaction</h3>
                    <p className={`text-center mt-3`}>Our top preference is your satisfaction. We&apos;re committed to exceeding expectations and providing a delightful dining experience every time you choose Chef&apos;s Domain.</p>
                </div>

                <div className="py-5 rounded-lg flex flex-col justify-between">
                    <img className="w-28 mx-auto" src={luxury} alt="" />
                    <h3 className="text-center text-2xl mt-5 font-semibold">Affordable Luxury</h3>
                    <p className={`text-center mt-3`}>Offering affordable luxury is one of our top priorities. We believe that gourmet dining should be accessible, and we strive to provide premium quality without breaking the bank.</p>
                </div>
            </div>
        </div>
    );
};

export default Preferences;