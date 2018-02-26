import React, { Component } from 'react';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class Todo extends Component {
   render() {
      return (
         <div>
        <section id="main-content">
          <section className="wrapper">
            <h3><i className="fa fa-angle-right"></i> To-Do List</h3>
      
            <div className="row mt">
               <div className="col-md-12">
                     
                  <div className="custom-check goleft mt">
                         <table id="todo" className="table table-hover custom-check">
                      
                      <thead>
                              <tr>
                                  <th className = "column05"> #</th>
                                  <th className="column1"> Status</th>
                                  <th className="column8"> Description (Team A is the team which initiated the trade.)</th>

                          
                              </tr>
                      </thead>

                          <tbody>
                          {this.props.checkList.map((l,i) =>
                            <tr key = {i}>
                                <td>{i+1}</td>
                                      <td>
                                      <span className={this.props.status[i]==1 ? "btn btn-success btn" : "btn btn-default"} 
                                          onClick={() =>this.props.toggleHandler(i)} ><i className="fa fa-check"></i></span></td>
                                <td>
                                      <span >{l.info}</span>
                                    
                                         </td>
                            </tr>
                           )}
                          </tbody>
                      </table>
                    </div>
               </div>
            </div>
         
      </section>
      </section>
         </div>
      )
   }
}
export default Todo;