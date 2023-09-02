import React, { Component } from 'react';

import profile from '../Images/sagar.jpg';


class About extends Component {
    render() {
        let v="value";
       
        return (
            
            <div className="about">


                   
                <div class="a"></div>
                <div class="b"></div>

                <div class="sagar"> 𝕊 𝕒 𝕘 𝕒 𝕣  </div>
                <div class="manjhi"> 𝕄𝕒𝕟𝕛𝕙𝕚 </div>
             
                
            
                <div class="student"> 𝕾𝖙𝖚𝖉𝖊𝖓𝖙 |  </div>
                <div class="dancer">  𝕯𝖆𝖓𝖈𝖊𝖗 |</div>
                <div class="choreographer"> 𝕮𝖍𝖔𝖗𝖊𝖔𝖌𝖗𝖆𝖕𝖍𝖊𝖗| </div>
                
                
                <div class="box"></div>
                <img className="img" src={profile} alt={v} />

               


                
              
          

              
                


            </div>
        );
    }
}

export default About;