import React from 'react'

class features extends React.Component{
    render(){
        return(
            <div class="features">
                <div class="l">More features for developers</div>
                <div class="row features-row">
                    <div class="column" style={{borderRadius: "5px"}}>
                      
                        <div class="up">
                            <img src="https://www.gstatic.com/mobilesdk/170215_mobilesdk/discoveryCards/2x/functions.png" alt=""/>
                        </div>
                        <div class="down1">
                            <h4><b>Functions</b></h4>
                            <p>Extend and connect Firebase features</p>
                        </div>
                    </div>
                  
                    <div class="column" style={{borderRadius: "5px"}}>
                      
                        <div class="up">
                            <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png" alt=""/>
                        </div>
                        <div class="down2">
                            <h4><b>Storage</b></h4>
                            <p>Store & retrieve user generated content</p>
                        </div>
                    </div>
                    
                    <div class="column" style={{borderRadius: "5px"}}>
                      
                        <div class="up">
                            <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/hosting.png" alt=""/>
                        </div>
                        <div class="down3">
                            <h4><b>Hosting</b></h4>
                            <p>Deploy web apps in seconds</p>
                        </div>
                    </div>
                    
            </div>
            <div class="link"><a href="https://console.firebase.google.com/u/0/project/dress-2f515/features/develop"><u>
                See all Build features</u></a>
            </div>     
        </div>        
        )
    }
}
export default features;