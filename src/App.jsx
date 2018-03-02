import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Pick from './Pick';
import Roster from './Roster';
import Todo from './Todo';
import Forum from './Forum';
import TradeHistory from './TradeHistory';
import Initiate from './Initiate';

class App extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         name: "Ed Stefanski",
         photo: '76GM',
         editing: "",
         messagesInProgress: [
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

               ]
            },
            {
               message:[
                  {
                     m:"lala.",
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

               ]
            }

         ],
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
            [1,1,1,-1,-1,-1,-1,-1,-1,-1],
            [1,1,1,-1,-1,-1,-1,-1,-1,-1]
         ],
         tradesInProcess:[
            {
               team: "Cavaliers",
               obtain: ["Isaiah THomas",],
               send: ["Markelle Fultz",]
            },
            {
               team: "haha",
               obtain:["jaja"],
               send: ["lala"]
            }
         ],
         tradesCompleted:[
            {
               team: "Nets",
               obtain: ["Trevor Booker"],
               send: ["Jahlil Okafor","Nik Stauskas","a future second-round pick"]
            },
            {
               team: "haha",
               obtain:["jaja"],
               send: ["lala"]
            }

         ],
         targetTeam:"",
         targetPlayer: "",
         targetPlayers: [],
         targetPick:"",
         targetPicks: [],
         targetMoney: "",
         yourPlayer: "",
         yourPlayers:[],
         yourPick: "",
         yourPicks:[],
         moneyOffer:"",
         checkToSubmit: false
      }
      this.toggleHandler = this.toggleHandler.bind(this);
      this.sendMessageHandler = this.sendMessageHandler.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.deleteTradeHandler = this.deleteTradeHandler.bind(this);

      this.setTargetTeam=this.setTargetTeam.bind(this);

      this.setTargetPlayer=this.setTargetPlayer.bind(this);
      this.addTargetPlayer=this.addTargetPlayer.bind(this);
      this.clearTargetPlayer=this.clearTargetPlayer.bind(this);

      this.setTargetPick=this.setTargetPick.bind(this);
      this.addTargetPick = this.addTargetPick.bind(this);
      this.clearTargetPick=this.clearTargetPick.bind(this);

      this.setTargetMoney=this.setTargetMoney.bind(this);

      this.setYourPlayer=this.setYourPlayer.bind(this);
      this.addYourPlayer=this.addYourPlayer.bind(this);
      this.clearYourPlayer=this.clearYourPlayer.bind(this);

      this.setYourPick=this.setYourPick.bind(this);
      this.addYourPick=this.addYourPick.bind(this);
      this.clearYourPick=this.clearYourPick.bind(this);

      this.setMoneyOffer=this.setMoneyOffer.bind(this);

      this.setCheck=this.setCheck.bind(this);
      this.initiateTrade=this.initiateTrade.bind(this);


   };
   toggleHandler(i){
      if (! this.state.status || !this.state.tradesInProcess|| !this.state.tradesCompleted||
         this.state.tradesCompleted.length==0||this.state.tradesInProcess.length==0|| this.state.status.length ==0 ) return;
      if (i===9){
         let tempCompleted = this.state.tradesCompleted.slice();
         let tempInProcess = this.state.tradesInProcess.slice();

         tempCompleted.push(tempInProcess[0]);
         console.log(tempInProcess[0]);
         
         this.deleteTradeHandler(0);
         this.setState({tradesCompleted:tempCompleted});
      }
      else{
         let temp = this.state.status.slice();
         // can only check the item in order or cancel the item in reverse order
         if (((i===1 || temp[0][i-1]===1)&&temp[0][i]===-1) || (temp[0][i]===1&&temp[0][i+1]===-1)) 
            temp[0][i] = -temp[0][i];
         this.setState({status: temp});
      }
   };
   deleteTradeHandler(i){
      let tempStatus = this.state.status.slice();
      let tempTrade = this.state.tradesInProcess.slice();

      tempStatus.splice(i,1);
      tempTrade.splice(i,1);

      this.setState({status:tempStatus});
      this.setState({tradesInProcess:tempTrade});
   };
   sendMessageHandler(e){
      let temp = this.state.messagesInProgress.slice();
      temp[0].message.push({m:this.state.editing, sender:this.state.name,photo:this.state.photo});
      this.setState({messagesInProgress: temp});
      this.setState({editing: ""});
      //prevent refresh the page when submitting the form 
      e.preventDefault();
      e.stopPropagation();
   };
   handleChange(e) {
      this.setState({editing: e.target.value});
   };

   setTargetTeam(e){
      this.setState({targetTeam: e.target.value});
   };
   setTargetPlayer(e){
      this.setState({targetPlayer: e.target.value});
   }
   addTargetPlayer(){
      if (this.state.targetPlayer !=""){
         let temp = this.state.targetPlayers.slice();
         let value = this.state.targetPlayer;
         temp.push(value);
         this.setState({targetPlayers:temp});
         this.setState({targetPlayer:""});
      }
   };
   clearTargetPlayer(){
      var empty = [];
      this.setState({targetPlayers:empty});
      this.setState({targetPlayer:""});

   };

   setTargetPick(e){
      this.setState({targetPick: e.target.value});
   }
   addTargetPick(p){
      if (this.state.targetPick !=""){
         let temp = this.state.targetPicks.slice();
         temp.push(this.state.targetPick);
         this.setState({targetPicks:temp});
         this.setState({targetPick:""});
      }
   };
   clearTargetPick(){
      var empty = [];
      this.setState({targetPicks:empty});
      this.setState({targetPick:""});
   };

   setTargetMoney(e){
      this.setState({targetMoney: e.target.value});
   };


   setYourPlayer(e){
      this.setState({yourPlayer: e.target.value});
   }
   addYourPlayer(n){
      if (this.state.yourPlayer !=""){
         let temp = this.state.yourPlayers.slice();
         temp.push(this.state.yourPlayer);
         this.setState({yourPlayers:temp});
         this.setState({yourPlayer:""});
      }
   };
   clearYourPlayer(){
      var empty = [];
      this.setState({yourPlayers:empty});
      this.setState({yourPlayer:""});
   };

   setYourPick(e){
      this.setState({yourPick: e.target.value});
   }
   addYourPick(p){
      if (this.state.yourPick !=""){
         let temp = this.state.yourPicks.slice();
         temp.push(this.state.yourPick);
         this.setState({yourPicks:temp});
         this.setState({yourPick:""});
      }
   };
   clearYourPick(){
      var empty = [];
      this.setState({yourPicks:empty});
      this.setState({yourPick:""});
   };
   setMoneyOffer(e){
      this.setState({moneyOffer: e.target.value});
   };
   setCheck(e){
      this.setState({checkToSubmit: e.target.checked});
   };

   initiateTrade(e){

      if (this.state.checkToSubmit){
         var obtain=[...this.state.targetPlayers,...this.state.targetPicks];
         var send = [...this.state.yourPlayers,...this.state.yourPicks];
         if (this.state.targetMoney!="")
            obtain=[...obtain, "$"+this.state.targetMoney];
         if (this.state.moneyOffer!="")
            send=[...send, "$"+this.state.moneyOffer]

         var messageIni = [];
         var statusIni = [1,1,1,-1,-1,-1,-1,-1,-1,-1];
         
         var trade= {
            team: this.state.targetTeam,
            obtain:obtain,
            send:send
         };
         //add a new trade history
         let temp = this.state.tradesInProcess.slice();
         temp.push(trade);
         this.setState({tradesInProcess:temp});

         // add new message board
         temp = this.state.messagesInProgress.slice();
         temp.push(messageIni);
         this.setState({messagesInProgress:temp});

         // add new status check list
         temp = this.state.status.slice();
         temp.push(statusIni);
         this.setState({status:temp});

         //clear the input 
         this.clearYourPick();
         this.clearYourPlayer();
         this.clearTargetPlayer();
         this.clearTargetPick();
         this.setState({targetTeam:""});
         this.setState({checkToSubmit:false});
      }else{
         alert("Please review your trade and check the box before you submit!");

      }
      e.preventDefault();
      e.stopPropagation();
   };

   render() {
      return (
         <div>
         <section id="container" >
            <Header />
            <Sidebar />

            <Initiate targetPlayers={this.state.targetPlayers}  targetPlayer={this.state.targetPlayer}
                        targetPicks={this.state.targetPicks} targetPick={this.state.targetPick}
                        targetMoney={this.state.targetMoney}  targetTeam={this.state.targetTeam}

                        yourPlayers={this.state.yourPlayers} yourPlayer={this.state.yourPlayer}
                        yourPicks={this.state.yourPicks}  yourPick={this.state.yourPick}
                        moneyOffer={this.state.moneyOffer} checkToSubmit={this.state.checkToSubmit} 
                     
                        setTargetTeam={this.setTargetTeam} setTargetPlayer={this.setTargetPlayer}
                        addTargetPlayer={this.addTargetPlayer} clearTargetPlayer={this.clearTargetPlayer}
                        setTargetPick={this.setTargetPick} addTargetPick={this.addTargetPick}
                        clearTargetPick={this.clearTargetPick} setTargetMoney={this.setTargetMoney} 

                        setYourPick={this.setYourPick} setYourPlayer={this.setYourPlayer}
                        addYourPlayer={this.addYourPlayer} addYourPick={this.addYourPick}
                        clearYourPlayer={this.clearYourPlayer} clearYourPick={this.clearYourPick}
                        setMoneyOffer={this.setMoneyOffer}  initiateTrade={this.initiateTrade}
                        setCheck={this.setCheck} />
            <TradeHistory status = {this.state.status} tradesInProcess={this.state.tradesInProcess}
                           tradesCompleted={this.state.tradesCompleted} deleteTradeHandler={this.deleteTradeHandler}/>
            <Todo  toggleHandler = {this.toggleHandler} checkList={this.state.checkList} 
               status = {this.state.status[0]}/> 
            <Forum sendMessageHandler={this.sendMessageHandler } messages={this.state.messagesInProgress[0].message} 
                  editing={this.state.editing} handleChange={this.handleChange} />
            <Roster />
            <Pick />


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