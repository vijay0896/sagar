import React, { Component } from 'react';

import product from '../Images/product1.png';
class Project extends Component {
    render() {
        let x="value1";
    
        return (
            <div className="contact">
                  <div class="resume1">
                  <div class="boxin"> </div>
                  <div class="box1"> </div>
                  <img className="product" src={product} alt={x} />
                  <div class="water">
                    W
                    <br></br>
                    A
                    <br></br>

                    T
                    <br></br>
                    E
                    <br></br>
                    R
                  </div>

                
              

                <div class="balls">
                    B
                    <br></br>
                    A
                    <br></br>

                    L
                    <br></br>
                    L
                    <br></br>
                    S
                  </div>

                
                </div>
               
                
          
               
                


            </div>
            
        );
    }
}

export default Project;