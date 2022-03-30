import React from "react";
import "./Board.css";
import Cards from './Cards.js';

class Board extends React.Component {
    render() {
      return (
        <div className="grid-container">
          <div className="header">header</div>
          <div className="column-1">
            <Cards/>
          </div>
          <div className="column-2">
          <Cards/>
          </div>
          <div className="column-3">
          <Cards/>
          </div>
          <div className="column-4">
          <Cards/>
          </div>
          <div className="column-5">
          <Cards/>
          </div>
          <div className="column-6">
          <Cards/>
          </div>
          <div className="column-7">
          <Cards/>
          </div>
          <div className="column-8">
          <Cards/>
          </div>
          <div className="column-9">
          <Cards/>
          </div>
          <div className="column-10">
          <Cards/>
          </div>
          <div className="column-11">
          <Cards/>
          </div>
          <div className="column-12">
          <Cards/>
          </div>
          <div className="column-13">
          <Cards/>
          </div>
          <div className="column-14">
          <Cards/>
          </div>
          <div className="column-15">
          <Cards/>
          </div>
          <div className="column-16">
          <Cards/>
          </div>
        </div>

      );
    }
  }
  
export default Board;