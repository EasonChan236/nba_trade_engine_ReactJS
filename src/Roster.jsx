import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/style-responsive.css';
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/bootstrap.css';

class Roster extends Component {
   render() {
      return (
         <div>
         <Header />
        <Sidebar />
         <section id="main-content">
            <section class="wrapper">
               <h3><i class="fa fa-angle-right"></i> Roster</h3>
               <div class="row">
                  <div class="col-md-12">
                     <div class="content-panel">
                        <table class="table">
                           <thead>
                              <tr>
                                 <th>#</th>
                                 <th>Name</th>
                                 <th>Position</th>
                                 <th>Salary(million)</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>1</td>
                                 <td>JJ Redick</td>
                                 <td>Guard-Forward</td>
                                 <td>23</td>
                              </tr>
                              <tr>
                                 <td>2</td>
                                 <td>Amir Johnson</td>
                                 <td>Forward-Center</td>
                                 <td>11</td>
                              </tr>
                              <tr>
                                 <td>3</td>
                                 <td>Trevor Booker</td>
                                 <td>Forward</td>
                                 <td>9.5</td>
                              </tr>
                              <tr>
                                 <td>4</td>
                                 <td>Jerryd Bayless</td>
                                 <td>Guard</td>
                                 <td>9</td>
                              </tr>
                              <tr>
                                 <td>5</td>
                                 <td>Markelle Fultz</td>
                                 <td>Guard</td>
                                 <td>7</td>
                              </tr>
                              <tr>
                                 <td>6</td>
                                 <td>Ben Simmons</td>
                                 <td>Guard-Forward</td>
                                 <td>6</td>
                              </tr>
                              <tr>
                                 <td>7</td>
                                 <td>Joel Embiid</td>
                                 <td>Center</td>
                                 <td>6</td>
                              </tr>
                              <tr>
                                 <td>8</td>
                                 <td>Dario Saric</td>
                                 <td>Forward</td>
                                 <td>2.4</td>
                              </tr>
                              <tr>
                                 <td>9</td>
                                 <td>Justin Anderson</td>
                                 <td>Guard-Forward</td>
                                 <td>1.6</td>
                              </tr>
                              <tr>
                                 <td>10</td>
                                 <td>Robert Covington</td>
                                 <td>Forward</td>
                                 <td>1.5</td>
                              </tr>
                              <tr>
                                 <td>11</td>
                                 <td>Richaun Holmes</td>
                                 <td>Forward-Center</td>
                                 <td>1.4</td>
                              </tr>
                              <tr>
                                 <td>12</td>
                                 <td>T.J. McConnell</td>
                                 <td>Guard</td>
                                 <td>1.4</td>
                              </tr>
                              <tr>
                                 <td>13</td>
                                 <td>Furkan Korkmaz</td>
                                 <td>Guard-Forward</td>
                                 <td>1.4</td>
                              </tr>
                              <tr>
                                 <td>14</td>
                                 <td>Timothe Luwawu-Cabarrot</td>
                                 <td>Guard-Forward</td>
                                 <td>1.4</td>
                              </tr>
                              <tr>
                                 <td>15</td>
                                 <td>James Young</td>
                                 <td>Guard-Forward</td>
                                 <td>0.07</td>
                              </tr>
                              <tr>
                                 <td>16</td>
                                 <td>Demetrius Jackson</td>
                                 <td>Guard</td>
                                 <td>0.07</td>
                              </tr>
                              <tr>
                                 <td>17</td>
                                 <td>Larry Drew II</td>
                                 <td>Guard</td>
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
   )
}
}
export default Roster;