import SimpleSlider from '../../components/HeroSlider';
import Overview from '../../components/Overview';
import Stock from '../../components/Stock';
import VideoReview from '../../components/VideoReview';

export const Home = () => {
    return (
        <>
            Navbar
            < SimpleSlider />
            <Overview />
            <Stock />
            <VideoReview />
        </>
    )
}