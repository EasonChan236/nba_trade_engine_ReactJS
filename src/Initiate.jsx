import React, { Component } from 'react';
import { Link, Redirect }  from 'react-router-dom';

import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class Initiate extends Component {
   render() {
      if (this.props.redirect){
         return(<Redirect to={'/app/tradeHistory'}/>);
      }
      return (
         <div>
        	<section id="main-content">
            <section className="wrapper">
               <h3><i className="fa fa-angle-right"></i> Initiate Trade</h3>
          
               <div className="row mt">
                  <div className="col-lg-12">
                     <div className="form-panel">
                        <h4 className="mb"><i className="fa fa-angle-right"></i>Enter Your Request</h4>
                        <form className="form-horizontal style-form" method="get">
                          
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Targeting Team</label>
                              <div className="col-sm-10">
                                 <input type="text" className="form-control" id="target_team" value={this.props.targetTeam} 
                                 onChange={this.props.setTargetTeam} />
                              </div>
                           </div>
                           
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Targeting Players</label>
                              <div className="col-sm-10" id="displayTarget_player">
                                 <input type="text" className="form-control" id="target_player" value={this.props.targetPlayer} 
                                 onChange={this.props.setTargetPlayer} />
                                  {this.props.targetPlayers.map((p,i) =>
                                 	<span className="help-block" key={i+1}>{p}</span>
                                 )}
                              </div>
                              <div className=" add-task-row">
                                 <a className="btn btn-sm pull-right" onClick={this.props.clearTargetPlayer}>Clear All</a>
                                 <a className="btn btn-sm pull-right" onClick={this.props.addTargetPlayer}>Add</a>
                              </div>
                           </div>
                         
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Targeting Picks</label>
                              <div className="col-sm-10" id="displayTarget_pick">
                                 <input type="text" className="form-control" id="target_pick" value={this.props.targetPick} 
                                 onChange={this.props.setTargetPick} />
                                 {this.props.targetPicks.map((p,i) =>
                                 	<span className="help-block" key={i+1}>{p}</span>
                                 )}
                              </div>
                              <div className=" add-task-row">
                                 <a className="btn btn-sm pull-right" onClick={this.props.clearTargetPick}>Clear All</a>
                                 <a className="btn btn-sm pull-right" onClick={this.props.addTargetPick}>Add</a>
                              </div>
                           </div>
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Targeting Money</label>
                              <div className="col-sm-10">
                                 <input type="text" className="form-control" value={this.props.targetMoney} 
                                 onChange={this.props.setTargetMoney}/>
                                 <span className="help-block" >Enter the amount of money you wish to obtain </span>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  	
               </div>
              
               <div className="row mt">
                  <div className="col-lg-12">
                     <div className="form-panel">
                        <h4 className="mb"><i className="fa fa-angle-right"></i>Enter Your Offer</h4>
                        <form className="form-horizontal style-form" method="get">
                         
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Your Players</label>
                              <div className="col-sm-10" id="displayOffer_player">
                                 <input type="text" className="form-control" id="offer_player" value={this.props.yourPlayer} 
                                 onChange={this.props.setYourPlayer} />
                                 {this.props.yourPlayers.map((p,i) =>
                                 	<span className="help-block" key={i+1}>{p}</span>
                                 )}
                              </div>
                              <div className=" add-task-row">
                                 <a className="btn btn-sm pull-right" onClick={this.props.clearYourPlayer}>Clear All</a>
                                 <a className="btn btn-sm pull-right" onClick={this.props.addYourPlayer}>Add</a>
                              </div>
                           </div>
                    
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Your Picks</label>
                              <div className="col-sm-10" id="displayOffer_pick">
                                 <input type="text" className="form-control" id="offer_pick" value={this.props.yourPick} 
                                 onChange={this.props.setYourPick} />
                                 {this.props.yourPicks.map((p,i) =>
                                 	<span className="help-block" key={i+1}>{p}</span>
                                 )}
                              </div>
                              <div className=" add-task-row">
                                 <a className="btn btn-sm pull-right" onClick={this.props.clearYourPick}>Clear All</a>
                                 <a className="btn btn-sm pull-right" onClick={this.props.addYourPick}>Add</a>
                              </div>
                           </div>
                           <div className="form-group">
                              <label className="col-sm-2 col-sm-2 control-label">Money Offer</label>
                              <div className="col-sm-10">
                                 <input type="text" className="form-control" value={this.props.moneyOffer} 
                                 onChange={this.props.setMoneyOffer}/>
                                 <span className="help-block">Enter the amount of money you are willing to offer </span>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                     	
               </div>
       
               <div className="row mt">
                  <div className="col-lg-12">
                     <div className="form-panel">
                        <h4 className="mb"><i className="fa fa-angle-right"></i> Submit Trade Request</h4>
                        <div className="checkbox">
                                <label>
                                  <input id="finalcheck" type="checkbox" onChange={this.props.setCheck} checked={this.props.checkToSubmit} />
                                  Everything looks great and I am ready to submit this trade request
                                </label>
                        </div>
                        <form onSubmit={this.props.initiateTrade} id="submit_form"> 
                     
                           <input type="submit" className="btn btn-theme" value="Submit"/>
                           
                        </form>
                        
                     </div>
                
                  </div>
           
               </div>
      
            </section>
      
         </section>
         </div>
      )
   }
}
export default Initiate;