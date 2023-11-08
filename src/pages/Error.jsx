import { useNavigate } from "react-router";
import errorImg  from "../assets/error/404.png";

const Error = () => {
    document.title = 'Error';

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div className={`h-[100vh] flex flex-col justify-center items-center text-center`}>
            <img className="h-60" src={errorImg} alt="" />
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark2 font-secondary">404</h2>
            <p className="text-2xl lg:text-4xl font-bold mt-2 font-secondary">Oops! Page not found</p>
            <button onClick={handleGoHome} className="mt-8 px-5 py-2 bg-primary text-white active:scale-95 transition-transform font-semibold">Go Home</button>
        </div>
    );
};

export default Error;