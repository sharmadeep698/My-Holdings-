import React from "react"

import Myholdings from "./MyHoldings.json"
const {Holdings} = Myholdings

const CardHolding = (props) =>{
  console.log(props.sold)
  const callBorder = (data) =>{

    var buyedPrice = (data.Buy).replace( /^\D+/g,'')
    var kitta = (data.Quantity).replace( /^\D+/g,'')
    var FinalTotal = buyedPrice * kitta
   
    if (data.sold === "sold"){
         var SoldPriceNum = (data.soldPrice).replace( /^\D+/g,'')
        var SoldTotal = SoldPriceNum * kitta
        var Profit = SoldTotal - FinalTotal 

      return(<span>
          {FinalTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
           <p className="card-text" style={{color:"green"}}>Total Sold price  = Rs {SoldTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>
         <p className="card-text">Total profit = Rs {Profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </p>
      </span>
       )
    }else {
       return(FinalTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }
   
  }

  if (props.sold===undefined){ ///////////////\\\\\\\\\\\\ ALL those that is not sold 
    return(

    <div>

  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row">
       
          {Holdings.map((data,i)=>{
               var position = (data.Postion).toLowerCase().replace(/\s/g, '');

               
            return( 
               <div className="col-md-4 " key={i}>
               <div className="card mb-4 shadow-sm">
              <div>
               <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
               <rect width="100%" height="100%" fill="#55595c"/>
                 <text x="50%" y="50%" fill="#eceeef" dy=".3em">{data.Name}</text>
                  </svg>
                  <div className="card-body">
               <p className="card-text">{data.Note}.</p>
                 <p className="card-text">{data.Quantity}.</p>
                 <p className="card-text">{data.Buy}.</p>
                   <p className="card-text">Total invested = Rs {callBorder(data)}.</p>


               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
           
               <button type="button" className="btn btn-sm btn-outline-secondary">{data.Postion}</button>

                 
                  

                 
                 </div>

                 <small className="text-muted">{data.Date}</small>
               </div>
            </div>
          
            </div>
              </div>
        </div>

            )
          })}
           
            
          
        
        
       </div>

       </div>

</div>
    </div>

    )
      
  }else{////\\\\\\\\\\\\\\\\\\ this for props.sold

    return(

    <div>

  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row">
       
          {Holdings.map((data,i)=>{
               var position = (data.Postion).toLowerCase().replace(/\s/g, '');

               
            return( 
               <div className="col-md-4 " key={i}>
               <div className="card mb-4 shadow-sm">
              <div>
               <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
               <rect width="100%" height="100%" fill="#55595c"/>
                 <text x="50%" y="50%" fill="#eceeef" dy=".3em">{data.Name}</text>
                  </svg>
                  <div className="card-body">
               <p className="card-text">{data.Note}.</p>
                 <p className="card-text">{data.Quantity}.</p>
                 <p className="card-text">{data.Buy}.</p>
                   <p className="card-text">Total invested = Rs {callBorder(data)}.</p>


               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                 {(position==="sellstock") ? 
                   <button type="button" className="btn btn-sm btn-outline-secondary" style={{color:"green"}}>{data.Postion}</button>

                 :
                          <button type="button" className="btn btn-sm btn-outline-secondary">{data.Postion}</button>

                 
               }
                   {(data.sold) ?
                    

                    <button type="button" className="btn btn-sm btn-outline-secondary" style={{color:"Red",borderStyle:"solid",borderColor:"red"} }>{data.sold}</button> 
                    
                    : null
                  }

                 
                 </div>

                 <small className="text-muted">{data.Date}</small>
               </div>
            </div>
          
            </div>
              </div>
        </div>

            )
          })}
           
            
          
        
        
       </div>

       </div>

</div>
    </div>

    )

  }

	
}
export default CardHolding;