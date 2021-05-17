import React from 'react'

class table extends React.Component{
    render(){
        return(<div class="box" id="box">
        <h2>Cloud Firestore</h2>
        <h4 style={{textDecoration: "underline blue"}}>Data</h4>
        <table>
            <tr>
                <td colspan="3"><i style={{fontSize: "50px"}} class="fa fa-home"></i></td>
            </tr>
            <tr >
                <td><i style={{fontSize: "50px"}} class="fa fa-angle-double-up"></i>  Project Name
                </td>
                <td><i class="fas fa-copy"></i>rooms<span style={{float: "right"}}>&#8942;</span></td>
                <td><i class="fas fa-file-alt"></i>Name</td>
            </tr>
            <tr>
                <td style={{color: "slateblue"}}><i style={{color: "slateblue"}} class="fa fa-plus" aria-hidden="true"></i>Start collection</td>
                <td style={{color: "slateblue"}}><i style={{color: "slateblue"}} class="fa fa-plus" aria-hidden="true"></i>Add document</td>
                <td style={{color: "slateblue"}}><i style={{color: "slateblue"}} class="fa fa-plus" aria-hidden="true"></i>Start collection</td>
            </tr>
            <tr>
                <td rowspan="10"style={{fontWeight: "lighter"}}>rooms
                    
                </td>
                <td rowspan="10"style={{fontWeight: "lighter"}}>docs</td>
                <td rowspan="5" style={{fontWeight: "lighter"}}>messages</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            
            <tr>
                <td style={{color: "slateblue"}}><i style={{color: "slateblue"}} class="fa fa-plus" aria-hidden="true"></i>Add Field</td>
            </tr>
            <tr> 
                <td rowspan="4" style={{fontWeight: "lighter", height: "400px"}}>name:"react.js"</td>
            </tr>
        </table>
        <div style={{height: "20px"}}></div>
        </div>
        )
    }
}
export default table;