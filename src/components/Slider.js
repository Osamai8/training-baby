import React from 'react';


const Slider = () => {
    const style = {
        carousel: {
            width: '100%',
            height: '80vh',
        },
        img: {
            objectFit: 'cover',
            width: "90%",
            height: "70vh"
        }
    }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"  >
            <div className="carousel-inner" style={style.carousel}>
                <div className="carousel-item active" >
                    <img src="https://picsum.photos/1090" className="d-block w-100" alt="..." style={style.img} />
                </div>
                <div className="carousel-item">
                    <img src='https://picsum.photos/1080' className="d-block w-100" alt="..." style={style.img} />
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/1070" className="d-block w-100" alt="..." style={style.img} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;
