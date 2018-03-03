import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class TradeCompleted extends Component {
   render() {
   	var styles = {
		width: '100%'
	};

      return (
         <div>
			<h4><i className="fa fa-angle-right"></i> Trade Completed</h4>
	        <hr />
	        <table className="table table-striped table-advance table-hover">
	          
	           <thead>
	              <tr>
	                 <th className = "column225"><i className="fa fa-dribbble"></i> Team</th>
	                 <th className="column225"><i className="fa fa-angle-double-down"></i> Obtain</th>
	                 <th className="column225"><i className="fa fa-angle-double-up"></i> Send</th>
	                 <th className = "column225"><i className=" fa fa-edit"></i> Status</th>
	                 <th className = "column1"></th>
	              </tr>
	           </thead>
	           <tbody id="TC_table">
	           	  {this.props.tradesCompleted.map((m,i) =>
	              <tr key={i+1}>
	                 <td>{m.team}</td>
	                 <td >{m.obtain.map((p) => <div>{p}</div>)}</td>
	                 <td> {m.send.map((p) => <div>{p}</div>)}</td>
	                 <td>
	                    <div className="progress progress-striped">
	                       <div className="progress-bar progress-bar-w" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={styles}>
	                          <span className="sr-only">100% Complete</span>
	                       </div>
	                    </div>
	                 </td>
	                 <td>
	                    <Link to={'/app/forum'}>
                           <a className="button btn btn-success btn-xs" ><i className="fa fa-comment"></i></a>
                        </Link>
	                 </td>
	              </tr>
	              )}
	           </tbody>
	        </table>
         </div>
      )
   }
}
export default TradeCompleted;