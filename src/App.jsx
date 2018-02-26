import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Pick from './Pick';
import Roster from './Roster';
import Todo from './Todo';
import Forum from './Forum';

class App extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         name: "Ed Stefanski",
         photo: '76GM',
         editing: "",
         checkList: [
            {info:"The trade is initiated.",id : 1},
            {info:"Team A shows its interest in Team B's asset.",id : 2},
            {info:"Team A offers appropriate asset to match the trade.",id : 3},
            {info:"The league confirms that the value of each team's assets matches.",id : 4},
            {info:"Team B shows its interest in the asset Team A offered.",id : 5},
            {info:"Team B accepts the trade.",id : 6},
            {info:"The trade is sent to league for approvement.",id : 7},
            {info:"The league approves the trade.",id : 8},
            {info:"The players pass the phycial.",id : 9},
            {info:"The trade is completed.",id : 10}
         ],

         status: [
            {s:[1,1,1,-1,-1,-1,-1,-1,-1,-1], id:1},
            {s:[1,1,1,-1,-1,-1,-1,-1,-1,-1], id:2},
            {s:[1,1,1,1,1,1,1,1,1,1], id:3}
         ],
         messages: [
            {
               message:[
                  {
                     m:"We are interested in IT.",
                     sender: "Ed Stefanski",
                     photo: '76GM'
                  },
                  {
                     m:"We need a point guard.",
                     sender: "Koby Altman",
                     photo: 'cavsGM'
                  },
                  {
                     m:"How about Markelle Fultz?",
                     sender: "Ed Stefanski",
                     photo: '76GM'
                  },
                  {
                     m:"Deal.",
                     sender: "Koby Altman",
                     photo: 'cavsGM'
                  },
                  {
                     m:"Wait a minute.",
                     sender: "League",
                     photo: 'league'
                  },

               ],
               id :1
            },

         ]
      }
      this.toggleHandler = this.toggleHandler.bind(this);
      this.sendMessageHandler = this.sendMessageHandler.bind(this);
      this.handleChange=this.handleChange.bind(this);

   };
   toggleHandler(i){
      let temp = this.state.status.slice();
      temp[0].s[i] = -temp[0].s[i];
      this.setState({status: temp});
   };
   sendMessageHandler(e){
      let temp = this.state.messages.slice();
      temp[0].message.push({m:this.state.editing, sender:this.state.name,photo:this.state.photo});
      this.setState({messages: temp});
      this.setState({editing: ""});
      //prevent refresh the page when submitting the form 
      e.preventDefault();
      e.stopPropagation();
   };
   handleChange(e) {
      this.setState({editing: e.target.value});
   };
   render() {
      return (
         <div>
         <section id="container" >
            <Header />
            <Sidebar />
            {/*<Todo  toggleHandler = {this.toggleHandler} checkList={this.state.checkList} 
               //status = {this.state.status[0].s}/>  */}
            <Forum sendMessageHandler={this.sendMessageHandler } messages={this.state.messages[0].message} 
                  editing={this.state.editing} handleChange={this.handleChange} />
            <Footer />
         </section>
         </div>
      );
   }
}
export default App;

{/*
<Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
*/}