import Head from 'next/head'
import styles from './App.module.scss'

// JAVASCRIPT

// const pageviews = document.querySelector(".pageviews");
// const price = document.querySelector(".price");

// // range slider
// const slider = document.getElementsByName("price-range")[0];
// slider.oninput = e => {
//   pageviews.innerHTML = `${(e.target.value * 6.25).toFixed(0)}K PAGEVIEWS`;
//   price.innerHTML = `$${e.target.value}`;
// }

// // toggle button
// const toggleBtn = document.querySelector(".toggle-btn");
// const circle = document.querySelector(".circle");

// toggleBtn.addEventListener("click", () => {
//   circle.classList.toggle("yearly");
// });

const Component = () => {
  return <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }
      
      .app { 
        height: 100vh;
        width: 100vw;
        min-height: 650px;
        min-width: 200px;
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #c3e1ff 0%, #e5e1ff 100%);
        color: rgb(136, 151, 167);
        font-size: 12px;
        font-weight: bold;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      
      h1 {
        font-size: 2.5em;
        color: rgb(47, 59, 79);
        text-align: center;
      }
      
      .sub-header {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      }
      
      .sub-header p {
        padding: 5px 2.5px;
      }
      
      .card {
        background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgb(235, 243, 255) 100.2% );
        padding: 40px 30px;
        border-radius: 15px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      
      .pricing-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      }
      
      .pricing-header {
        position: relative;
        display: flex;
        padding: 5px 2.5px;
        width: 400px;
        margin-bottom: 20px;
        justify-content: space-between;
      }
      
      .pricing-header > div {
        display: flex;
        align-items: center;
      }
      
      .pageviews {
        letter-spacing: .15em;
        margin-left: 25px;
      }
      
      #price-range {
        position: absolute;
        top: 70px;
        width: 400px;
      }
      
      .pricing-header div:last-of-type {
        margin-right: 25px;
      }
      
      .price {
        font-size: 2.5em;
        font-weight: 900;
        color: rgb(47, 59, 79);
        padding-right: .2em;
      }
      
      .billing-cycle-container {
        display: flex;
        width: 500px;
        margin-bottom: 40px;
      }
      
      .billing-cycle-container > div {
        display: flex;
        align-items: center;
      }
      
      .billing-cycle-container > div:first-child {
        flex: 1;
        justify-content: flex-end;
      }
      
      .billing-cycle-container > div:nth-child(2) {
        margin: auto 20px;
      }
      
      .toggle-btn {
        background-color: lightsteelblue;
        height: 25px;
        width: 45px;
        border-radius: 12.5px;
        padding: 5px;
      }
      
      .toggle-btn:hover {
        cursor: pointer;
      }
      
      .circle {
        height: 15px;
        width: 15px;
        border-radius: 7.5px;
        background-color: rgb(22, 119, 209);
        transition: all .1s ease-in;
        transition-property: background-color, margin;
      }
      
      .yearly {
        margin-left: 20px;
        background-color: rgb(174, 128, 184) !important;
      }
      
      .billing-cycle-container > div:last-child {
        flex: 1;
      }
      
      .billing-cycle-container > div:last-child span {
        background-color: peachpuff;
        color: lightcoral;
        height: 25px;
        margin-left: 10px;
        padding: 10px;
        border-radius: 12.5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .footer {
        display: flex;
        width: 400px;
      }
      
      .footer i {
        color: springgreen;
        padding-right: .5em;
      }
      
      .footer > div {
        flex: 1;
      }
      
      .btn-container {
        display: flex;
        align-items: center;
      }
      
      .start-trial-btn {
        background-color: rgb(49, 67, 99);
        color: white;
        font-weight: 400;
        height: 40px;
        width: 160px;
        border-radius: 20px;
        margin-left: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .start-trial-btn:hover {
        cursor: pointer;
        background-color: rgb(77, 98, 134);
      }
      
      @media only screen and (max-width: 570px) {
      
        h1 {
          font-size: 24px;
          line-height: 1.1em;
          margin-bottom: 10px;
        }
      
        .sub-header {
          flex-direction: column;
          margin-bottom: 25px;
        }
      
        .sub-header p {
          text-align: center;
          padding: 0px 2.5px;
        }
      
        .sub-header p:first-of-type {
          margin-bottom: 2.5px;
        }
      
        .card {
          padding: 40px 20px 20px 20px;
        }
      
        .pricing-container {
          flex-direction: column;
          margin-bottom: 0 !important;
        }
        
        .pricing-header {
          flex-direction: column;
          width: 300px;
          margin-bottom: 10px;
          justify-content: space-between;
        }
        
        .pricing-header > div {
          justify-content: center;
        }
      
        .pageviews {
          margin-left: 0;
          margin-bottom: 15px;
        }
      
        #price-range {
          width: 100%;
          position: static;
          margin-bottom: 15px;
        }
      
        .pricing-header div:last-of-type {
          margin-right: 0;
        }
      
        .billing-cycle-container {
          width: 300px;
          margin-bottom: 20px;
          font-size: .75em;
        }
      
        .billing-cycle-container > div:first-child {
          flex: .5;
          justify-content: center;
          margin-left: 20px;
        }
      
        .billing-cycle-container > div:nth-child(2) {
          margin: 10px;
        }
      
        .billing-cycle-container > div:last-child span {
          height: 25px;
          width: 75px;
          padding: 2.5px;
          border-radius: 12.5px;
        }
      
        .footer {
          flex-direction: column;
          align-items: center;
          width: auto;
        }
      
        .start-trial-btn {
          margin-top: 15px;
          margin-left: 0;
        }
      }
    `}</style>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <title>Interactive pricing component</title>
    </Head>
    <div className="app">
      <h1>Simple, traffic-based pricing</h1>
      <div className="sub-header">
      <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
      <div className="card">
        <div className="pricing-container">
          <div className="pricing-header">
            <div className="pageviews">100K PAGEVIEWS</div>
            <input type="range" name="price-range" id="price-range" min="4" max="1600" value="16" step="1" />
            <div><span className="price">$16.00</span>/ month</div>
          </div>
        </div>
        <div className="billing-cycle-container">
          <div>Monthly Billing</div>
          <div>
            <div className="toggle-btn">
              <div className="circle"></div>
            </div>
          </div>
          <div>Yearly Billing <span>25% discount</span></div>
        </div>
        <div className="footer">
          <div>
            <p><i className="fas fa-check"></i> Unlimited websites</p>
            <p><i className="fas fa-check"></i> 100% data ownership</p>
            <p><i className="fas fa-check"></i> Email reports</p>
          </div>
          <div className="btn-container">
            <div className="start-trial-btn">Start my trial</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Component
