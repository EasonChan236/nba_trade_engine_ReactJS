import React, { Component } from 'react';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class TradeInProcess extends Component {
	
   render() {
   	var arr = this.props.status;
   	var s = [arr.length];
   	for (var i =0; i< arr.length;i++){
   		var count = 0;
   		for (var j=0; j< 10; j++){
   			if (arr[i][j]==1) count++;
   		}
   		s[i]=count*10;
   	}
      return (
         <div>
			<h4><i className="fa fa-angle-right"></i> Trade in Progress</h4>
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
               <tbody id="TIP_table"> 
                  {this.props.tradesInProcess.map((m,i) => 
	              <tr key={i+1}>
	                 <td>{m.team}</td>
	                 <td >{m.obtain.map((p) => <div>{p}</div>)}</td>
	                 <td> {m.send.map((p) => <div>{p}</div>)}</td>
	                 <td>
                        <div className="progress progress-striped" >
                           <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: s[i]+'%'}} id="sample_bar">
                              <span className="sr-only">40% Complete</span>
                           </div>
                        </div>
                     </td>
                     <td>
                        <a className="button btn btn-success btn-xs" href="forum.html"><i className="fa fa-comment"></i></a>
                        <a className="button btn btn-primary btn-xs" href="todo_list.html"><i className="fa fa-pencil"></i></a>
                        <a className="button btn btn-danger btn-xs" onClick={() =>this.props.deleteTradeHandler(i)}><i className="fa fa-trash-o "></i></a>
                     </td>
                  </tr>
                  )}
               </tbody>
            </table>
         </div>
      )
   }
}
export default TradeInProcess;