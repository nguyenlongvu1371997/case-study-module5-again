import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Home() {
    return(
        <>
        <Navigation />
    <div id="boby">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFlr9PnpC6jjug00RwsNJGtDM9twKKSzX0lbOZ3RGfQ&s" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://file4.batdongsan.com.vn/2020/06/03/JGcIp0rf/20200603142344-7089.jpg" alt="Third slide" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </>
    )
}