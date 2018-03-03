import React, { Component } from "react";
import './assets/css/style.css';
import './assets/css/common.css';
import './assets/css/bootstrap.css';
import './assets/css/style-responsive.css';
import './assets/css/login.css';
import './assets/font-awesome/css/font-awesome.css';

class HomePage extends Component {
  render() {
    return (
       <div>
          <section id="main-content">
            <section className="wrapper">
                <h2>Welcome back, Ed!</h2>
                <div className="row">
                    <div className="col-lg-9 main-chart">
                        <div className="row mtbox">
                            <div className="col-md-2 col-sm-2 col-md-offset-1 box0">
                                <div className="box1">
                                    <span className="li_mail"></span>
                                    <h3>40</h3>
                                </div>
                                <p>You have 40 unread messages!</p>
                            </div>
                            <div className="col-md-2 col-sm-2 box0">
                                <div className="box1">
                                    <span className="li_banknote"></span>
                                    <h3>2</h3>
                                </div>
                                <p>You have participated in 2 ongoing trades!</p>
                            </div>
                            <div className="col-md-2 col-sm-2 box0">
                                <div className="box1">
                                    <span className="li_news"></span>
                                    <h3>23</h3>
                                </div>
                                <p>We found 23 news that's happening in the NBA today for you!</p>
                            </div>
                            <div className="col-md-2 col-sm-2 box0">
                                <div className="box1">
                                    <span className="li_data"></span>
                                    <h3>GOOD!</h3>
                                </div>
                                <p>You have maintained a good salary level in your team. Keep it up!</p>
                            </div>
                        </div>
 
                    </div>
                   
                    <div className="col-lg-3 ds">
                        <h3>NEWS</h3>

                        <div className="desc">
                            <div className="thumb">
                                <span className="badge bg-theme">
                                    <i className="fa fa-clock-o"></i>
                                </span>
                            </div>
                            <div className="details">
                                <p>
                                    <span>10 Minutes Ago</span>
                                    <br/>
                                    Kia MVP Ladder: <a href="http://www.espn.com/nba/player/_/id/3992/james-harden">James Harden</a> makes more headway in claim for first MVP
                                    <span>10 Minutes Ago</span>
                                    <br/> 
                                </p>
                            </div>
                        </div>
                        <div className="desc">
                            <div className="thumb">
                                <span className="badge bg-theme">
                                    <i className="fa fa-clock-o"></i>
                                </span>
                            </div>
                            <div className="details">
                                <p>
                                    <span>30 Minutes Ago</span>
                                    <br/>
                                    <a href="http://www.nba.com/video/2018/02/02/inside-nba-shaqtin?collection=news#/">Shaqtin' A Fool: </a>Porzingis takes one off the face
                                    <br/>
                                </p>
                            </div>
                        </div>
        
                        <div className="desc">
                            <div className="thumb">
                                <span className="badge bg-theme">
                                    <i className="fa fa-clock-o"></i>
                                </span>
                            </div>
                            <div className="details">
                                <p>
                                    <span>55 Minutes Ago</span>
                                    <br/>
                                    <a href="http://www.nba.com/article/2018/02/02/report-boston-celtics-reach-agreement-greg-monroe?collection=news#/">Reports: </a>Boston Celtics to sign center Greg Monroe
                                    <br/>
                                </p>
                            </div>
                        </div>
            
                        <div className="desc">
                            <div className="thumb">
                                <span className="badge bg-theme">
                                    <i className="fa fa-clock-o"></i>
                                </span>
                            </div>
                            <div className="details">
                                <p>
                                    <span>1 Hour Ago</span>
                                    <br/>
                                    <a href="http://www.nba.com/video/2018/02/01/20180201-rookie-ladder-nba?collection=news#/">Kia Rookie Ladder:</a> Simmons impresses despite slump
                                    <br/>
                                </p>
                            </div>
                        </div>
                        <div className="desc">
                            <div className="thumb">
                                <span className="badge bg-theme">
                                    <i className="fa fa-clock-o"></i>
                                </span>
                            </div>
                            <div className="details">
                                <p>
                                    <span>1 Hour Ago</span>
                                    <br/>
                                    <a href="http://www.nba.com/article/2018/02/02/lebron-james-warriors-rumor-nonsense?collection=news#/">LeBron James</a>calls rumor of interest in joining Golden State Warriors 'nonsense'
                                    <br/>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </section>
       </div>
    );
  }
}

export default HomePage;