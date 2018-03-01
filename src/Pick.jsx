import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class Pick extends Component {
   render() {
      return (
         <div>
         <Header />
        <Sidebar />
            <section id="main-content">
            <section class="wrapper">
               <h3><i class="fa fa-angle-right"></i> Picks</h3>
               <div class="row">
                  <div class="col-md-12">
                     <div class="content-panel">
                        <h4><i class="fa fa-angle-right"></i> 2018</h4>
                        <hr />
                        
                        <table class="table">
                           <thead>
                              <tr>
                                 <th class = "column1">#</th>
                                 <th class = "column2">Round</th>
                                 <th class = "column2">Origin</th>
                                 <th class = "column5">Description</th>
                              </tr>
                           </thead>
                           <tbody>
                              
                              <tr>
                                 <td>1</td>
                                 <td>First</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>2</td>
                                 <td>First</td>
                                 <td>Lakers</td>
                                 <td>If it lands #1 overall or #6+, if it falls between #2 and #5 Boston gets it.</td>
                              </tr>
                              <tr>
                                 <td>3</td>
                                 <td>Second</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>4</td>
                                 <td>Second</td>
                                 <td>Nets or Cavs</td>
                                 <td>Whichever is better.</td>
                              </tr>
                              <tr>
                                 <td>5</td>
                                 <td>Second</td>
                                 <td>Clippers or Knicks</td>
                                 <td>Whichever is better.</td>
                              </tr>
                           </tbody>
                        </table>
                        <h4><i class="fa fa-angle-right"></i> 2019</h4>
                        <hr />
                        <table class="table">
                           
                           <thead>
                              <tr>
                                 <th class = "column1">#</th>
                                 <th class = "column2">Round</th>
                                 <th class = "column2">Origin</th>
                                 <th class = "column5">Description</th>
                              </tr>
                           </thead>
                           <tbody>
                              
                              <tr>
                                 <td>1</td>
                                 <td>First</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>2</td>
                                 <td>First</td>
                                 <td>Kings</td>
                                 <td>If Boston does not get the Lakers pick in 2018, they will get the better of the Sixers or Kings pick in 2019.</td>
                              </tr>
                              <tr>
                                 <td>3</td>
                                 <td>Second</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>4</td>
                                 <td>Second</td>
                                 <td>Bucks or Kings</td>
                                 <td>Whichever is better.</td>
                              </tr>
                           </tbody>
                        </table>
                        <h4><i class="fa fa-angle-right"></i> 2020</h4>
                        <hr />
                        <table class="table">
                           
                           <thead>
                              <tr>
                                 <th class = "column1">#</th>
                                 <th class = "column2">Round</th>
                                 <th class = "column2">Origin</th>
                                 <th class = "column5">Description</th>
                              </tr>
                           </thead>
                           <tbody>
                              
                              <tr>
                                 <td>1</td>
                                 <td>First</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>2</td>
                                 <td>Second</td>
                                 <td>Mavs</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>3</td>
                                 <td>Second</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>4</td>
                                 <td>Second</td>
                                 <td>Nets</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>5</td>
                                 <td>Second</td>
                                 <td>Knicks</td>
                                 <td>Orlando will get the lesser of the Brooklyn or NYK 2nd round pick as part of the Anzejs Pasecniks trade.</td>
                              </tr>
                           </tbody>
                        </table>
                        <h4><i class="fa fa-angle-right"></i> 2021</h4>
                        <hr />
                        <table class="table">
                           
                           <thead>
                              <tr>
                                 <th class = "column1">#</th>
                                 <th class = "column2">Round</th>
                                 <th class = "column2">Origin</th>
                                 <th class = "column5">Description</th>
                              </tr>
                           </thead>
                           <tbody>
                              
                              <tr>
                                 <td>1</td>
                                 <td>First</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>2</td>
                                 <td>Second</td>
                                 <td>76ers</td>
                                 <td></td>
                              </tr>
                              <tr>
                                 <td>3</td>
                                 <td>Second</td>
                                 <td>Knicks</td>
                                 <td></td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                   
                  </div>
                  
               </div>
              
            </section>
          
         </section>
         <Footer />
         </div>
      );
   }
}
export default Pick;