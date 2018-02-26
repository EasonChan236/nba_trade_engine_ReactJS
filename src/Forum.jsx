import React, { Component } from 'react';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class Forum extends Component {
   render() {

      return (
         <div>
	        <section id="main-content">
	          <section className="wrapper"  >
	          	<h3><i className="fa fa-angle-right"></i> Communication Board</h3>
	          	
	          	<div className="col-lg-12 ds" >
	              <div className="col-lg-12 ds" id="message_board">
	          
	          	  {this.props.messages.map((m,i) =>
	              <div className="desc" key = {i+1}>
	                <div className="thumb">
	                  <img className="img-circle" src={ require('./assets/img/' +m.photo +'.jpg') } width="35" height="35"  alt="General manager" />
	                </div>
	                <div className="details">
	                  <div><a href="#">{m.sender}</a><br/>
	                     <p>{m.m}</p>
	                  </div>
	                </div>
	              </div>
	              )}
	            

	              </div>  
	              <form className="form-horizontal style-form" method="get" onSubmit={this.props.sendMessageHandler} id="submit_form" >
	                     
	                <div className="form-group">
	                    
	                    <div className="col-sm-10">
	                        <input type="text"  className="form-control round-form forum-control-input" 
	                        	value={this.props.editing} onChange={this.props.handleChange}/>
	                    </div>

	                    <button className="col-sm-2 col-sm-2 btn btn-primary forum-send-button" >Send</button>
	                </div>
	              </form>
	            </div>  

			      </section>
	      </section>
         </div>
      )
   }
}
export default Forum;