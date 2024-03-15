import './body.css'
import CircularChart from './assets/img.js'
function Body()
{
return(
    <div className='container'>
    <div class="row">
    <div style={{ display: 'flex', alignItems: 'center' }} class='col-md' >
    <img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" style={{ marginRight: '10px' }}/>
    <div>
        <h6>1300% YOY</h6>
        <p style={{color:'orange'}}>400% QoQ Growth</p>
    </div>
</div>
<div style={{ display: 'flex', alignItems: 'center' }} class='col-md' >
<img src="https://www.fireboltt.com/cdn/shop/files/growth.gif?v=6149664055454190024" style={{ marginRight: '10px' }}/>
    <div>
        <h6>Units</h6>
        <p style={{color:'orange'}}>Sold</p>
    </div>
</div>
<div style={{ display: 'flex', alignItems: 'center' }} class='col-md' >
<img src="https://www.fireboltt.com/cdn/shop/files/stopwatch.gif.gif?39895" style={{ marginRight: '10px' }}/>
    <div>
        <h6> 1 Unit Sold</h6>
        <p style={{color:'orange'}}>Every 05 Sec</p>
    </div>
</div>
<div style={{ display: 'flex', alignItems: 'center' }} class='col-md' >
<img src="https://www.fireboltt.com/cdn/shop/files/review.gif?v=6281934118567879272" style={{ marginRight: '10px' }}/>
    <div>
        <h6> 1 Unit Sold</h6>
        <p style={{color:'orange'}}>Every 05 Sec</p>
    </div>
</div>
    </div>
    <hr/>
    <h2 style={{textAlign:'center'}}>Explore <span style={{color:'orange'}}>Bestsellers</span>
    </h2>
    <hr style={{width:'100px',display:'flex',justifyContent:'center'}} />
    
    </div>

)
}
export default Body;