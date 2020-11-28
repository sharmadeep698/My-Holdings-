import React from "react"
import Myholdings from "./MyHoldings.json"
const {Holdings} = Myholdings

const CardHolding = () =>{
  

	return(<div>

  <div className="album py-5 bg-light">
    <div className="container">

      <div className="row">
       
          {Holdings.map((data)=>{

            return( 
               <div className="col-md-4">
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
         

               <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                   <button type="button" className="btn btn-sm btn-outline-secondary">{data.Postion}</button>
                   {(data.sold) ?
                    <button type="button" className="btn btn-sm btn-outline-secondary" style={{color:"Red"} }>{data.sold}</button> : null
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
export default CardHolding;