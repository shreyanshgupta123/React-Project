import './body.css'
import CircularChart from './assets/img.js'

function Home() {
  var products = [
    {
      productName: 'Royale',
      category: 'smartWatch',
      price: 3900,
      description: `Royale features 36.3 mm (1.43") AMOLED Display 466*466 pixels resolution, stainless steel design, Bluetooth calling, connect TWS, voice assistant, 300+ sports modes and much more.`,
      inStock: true,
      video: 'https://cdn.shopify.com/videos/c/o/v/33bbe59ee9be474382f3b572276654ec.mp4'
    },
    {
      productName: 'Invincile Plus',
      category: 'smartWatch',
      price: 2999,
      description: `Fire-Boltt is introducing the ultimate luxury smartwatch - INVINCIBLE PLUS - a true masterpiece of technology and design featuring an AMOLED Display, Bluetooth calling, 4 GB storage, and much more!`,
      inStock: true,
      video: 'https://cdn.shopify.com/videos/c/o/v/65b5c9043a994c698e2674d48c3080a1.mp4'
    },
    {
      productName: 'Gladiator Ocean',
      category: 'smartWatch',
      price: 1499,
      description: `The Gladiator (ocean) offers a stunning 49.7mm (1.96") display, Bluetooth calling, 600 NITS brightness, 123 sports modes, a sleek ocean strap, and voice assistance. Perfect for an active lifestyle.`,
      inStock: true,
      video: 'https://cdn.shopify.com/videos/c/o/v/7757d03fbfd64023916877de4d49e11c.mp4'
    },
    {
      productName: 'Fire-Boltt Cobra',
      category: 'smartWatch',
      price: 1699,
      description: `The Gladiator (ocean) offers a stunning 49.7mm (1.96") display, Bluetooth calling, 600 NITS brightness, 123 sports modes, a sleek ocean strap, and voice assistance. Perfect for an active lifestyle.`,
      inStock: true,
      video: 'https://cdn.shopify.com/videos/c/o/v/1426fd2cd6824840a21f2e477f7253fe.mp4'
    }
  ];

  return (
    <div>
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

      <div className='container'>
        <div className='row'>
          {products.map((product, index) => (
            <div className='col' key={index}>
              <div style={{ marginBottom: '20px', padding: '10px' }}>
                <video width="300" height="200" autoPlay muted controls>
                  <source src={product.video} type='video/mp4'/>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='container'>
        <div className="row">
          <div style={{ display: 'flex', alignItems: 'center' }} className='col-md' >
            <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" style={{ marginRight: '10px' }}/>
            <div>
              <h6>1300% YOY</h6>
              <p style={{color:'orange'}}>400% QoQ Growth</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} className='col-md' >
            <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" style={{ marginRight: '10px' }}/>
            <div>
              <h6>Units</h6>
              <p style={{color:'orange'}}>Sold</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} className='col-md' >
            <img src="https://www.fireboltt.com/cdn/shop/files/stopwatch.gif.gif?39895" style={{ marginRight: '10px' }}/>
            <div>
              <h6> 1 Unit Sold</h6>
              <p style={{color:'orange'}}>Every 05 Sec</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }} className='col-md' >
            <img src="https://www.fireboltt.com/cdn/shop/files/review.gif?v=6281934118567879272" style={{ marginRight: '10px' }}/>
            <div>
              <h6> 1 Unit Sold</h6>
              <p style={{color:'orange'}}>Every 05 Sec</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <h2 style={{textAlign:'center'}}>Explore <span style={{color:'orange'}}>Bestsellers</span></h2>
      <hr style={{width:'100px',display:'flex',justifyContent:'center'}} />
    </div>
  );
}

export default Home;
