function Home(){
return(
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_140_1759x.jpg?v=1710419397" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_13_1759x.jpg?v=1707137746" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://www.fireboltt.com/cdn/shop/files/Artboard_2_copy_5_1_1759x.png?v=1710325259" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>  
)
}

export default  Home;