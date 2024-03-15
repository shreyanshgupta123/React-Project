function Products() {
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
        <div className='container'>
            <div className='row'>
                {products.map((product, index) => (
                    <div className='col' key={index}>
                        <div style={{ display: 'block', alignItems: 'center', marginBottom: '20px',padding: '10px',whiteSpace:'none'}}>
                            <video width="300" height="200"  autoPlay muted>
                                <source src={product.video} type='video/mp4'/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    }    

export default Products;
