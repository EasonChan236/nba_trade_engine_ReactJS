import React, { Component } from 'react';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';
import TradeInProcess from './TradeInProcess';
import TradeCompleted from './TradeCompleted';

class TradeHistory extends Component {
   render() {
      return (
         <div>
         <section id="main-content">
            <section className="wrapper">
               <h3><i className="fa fa-angle-right"></i> Trade History</h3>
               <div className="row mt">
                  <div className="col-md-12">
                     <div className="content-panel">

        				<TradeInProcess tradesInProcess={this.props.tradesInProcess} status={this.props.status}
        								deleteTradeHandler={this.props.deleteTradeHandler}/>
        				<TradeCompleted tradesCompleted={this.props.tradesCompleted}/>
        				
        			 </div>       
                  </div>           
               </div>    
            </section>
         </section>


         </div>
      )
   }
}
export default TradeHistory;