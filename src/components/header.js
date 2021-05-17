import React from 'react'

class header extends React.Component{
    render(){
        return(<div class="firebox container-fluid">
        <div class="header-background row ">
            <div class="mlclass container-fluid">
                <div class="content">
                    <h1 ><b>Cloud Firestore</b></h1>
                    <p style={{fontSize: "20px"}}>Realtime updates, powerful queries, and automatic scaling</p>
                    <button  style={{fontFamily: "sans-serif", backgroundColor: "white",color: "#e65100",padding: "10px",borderRadius: "9px", width: "fit-content",paddingLeft: "18px",paddingRight: "18px",border: "transparent"}}><b>Get Started</b></button>
                </div>
            </div>
        </div>
    </div>)
    }
}

export default header;