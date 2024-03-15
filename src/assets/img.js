function CircularChart() {
       return (
         <svg viewBox="0 0 36 36" className="circular-chart">
           <path className="circle-bg" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"></path>
           <path className="circle" d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="100, 100" style={{ animation: '10000ms forwards running progress infinite' }}></path>
         </svg>
       );
     }
     
     export default CircularChart;
     