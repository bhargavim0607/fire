
import './App.css';
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Header from './components/header'
import Learn from './components/learn'
import Features from './components/features'
import Footer from './components/footer'
import Table from './components/table'

function App() {
  return (
    <div class="totalpage">
    <div class="wrapper">
        <Sidebar/>
    </div>
    <div class="mainclass">
        <Navbar/>
        <Header/>
        <div class="middlepart">
            <div class="header"></div>
            <div class="line">
                &#10024;Is Cloud Firestore right for you?
                <a class="comp" href="/#">Compare Databases</a><i class="fa fa-external-link" ></i>
            </div>
            <Learn/>
            <br/>
            <hr style={{color: "black", width: "auto",fontWeight:" bold"}}/><br/>
            <Features/>
    </div>
    <Footer/>
    <Table/>
    </div>
    
  </div>
  

 


    
  
    
  );
}

export default App;
