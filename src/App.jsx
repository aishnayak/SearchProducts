import React, {useState} from "react";
// import './style.css';
import './App.css';
import data from "./TemplateData.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");


  
  return (
    <>
      <div className="templateContainer">
        <h3>SEARCH ORDER</h3>
        <div className="searchContainer1">
          {/* Search Order */}
        <div className="searchInput_Container2">

<p>By</p>
<input type="radio" value="OrderId" id="OrderId" name="customerDetail"
autocomplete="given-id"/>
<label for="OrderId">OrderId</label>
<input type="radio" value="Mobile" id="Mobile" name="customerDetail"
autocomplete="given-no" />
<label for="Mobile">Mobile</label>
<input type="radio" value="Name" id="Name" name="customerDetail"
autocomplete="given-name"/>
<label for="Name" >Name</label>
<input type="radio" value="Email" id="Email" name="customerDetail" 
autocomplete="off"/>
<label for="Email" >Email</label>

<input id="searchInput" type="text" placeholder="Search here..." 
onChange={(e)=>{setSearchTerm(e.target.value)}}
/>
<input id="btn" type="button" value="SEARCH ORDER"  />
</div>
        </div>
       

            <div className="box">
              
                 <div className="orderDetails">
          {
            
           data 
              .filter((val) => {
                if(searchTerm == ""){
                  return null;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())
                || val.name.toLowerCase().includes(searchTerm.toLowerCase())
                || val.email.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                  return val;
                }
                else if(val.id.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
                 || val.mobile.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())){
                  return val;

                }
              })
              .map((val) => {
                return(
               
                  <div className="box-2" key={val.id}>
                    
                    <div className="info">

                    <div className="date">
                      <h5>Order Date</h5>
                      <p>{val.orderdate}</p>
                      <p>{val.ordertime}</p>
                    </div>
                        <div className="paid">
                          <p>{val.id}</p>
                          <button>Prepaid</button>
                        </div>
                        <div className="contact">
                          <h5>Buyer Details:</h5>
                          <p>{val.address}	</p>
                          <p>Pincode:{val.pincode}</p>
                          <p>Email:{val.email}</p>
                          <p>Phone:{val.mobile}</p>
                      
                        </div>
                        <div className="payement">
                          <p id="s">{val.Status}</p>
                          <p id="t">Total:{val.total}</p>
                        </div>
                        <div className="btn">
                          <button>TRACK</button>
                        </div>
                        <div className="invoice">
                          <a href="#">General Invoice</a>
                        </div>
                    </div>
                   


                        <div className="product">
                        
                          <div className="left">
                          <img src={val.image} alt="" />
                          </div>


                       <div className="right">
                        <div className="m1">
                        <a href="#">{val.plink}</a>
                        </div>

                           <div className="m2">

                           <div className="r1">
                            <p id="model">Model: {val.model}</p>
                            <p className="price">Price: Rs{val.price}</p>
                            <p id="date">Date: {val.orderdate}</p>
                            <p id="discount">Discount: {val.discount}</p>
                            </div>

                            <div className="r2">
                            <p id="quantity">Quantity: {val.qty}</p>
                            <p id="delvryCharge">Delivery Charge: {val.delvCharge}</p>
                            <p id="status">Status: {val.Status}</p>

                            </div>
                           </div>
            
                       </div>
                      
                        </div>
                      
                  </div> 
                )
              })
          }
               </div>
</div>
        
      </div>
    </>
  )
}

export default App;