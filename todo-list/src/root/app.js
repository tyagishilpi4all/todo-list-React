import React,{Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from '../component/header';
import Todo from '../component/todo';
import Footer from '../component/footer';
import '../../src/App'

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        if(window.localStorage){
            let storageLocal=JSON.parse(localStorage.getItem('mylocalStorage'));
            if(storageLocal){
                this.setState({
                    data:storageLocal
                })
            }
        }
    }

    addData=(obj)=>{
        console.log('::::', obj);
        const {data}=this.state;
        let myData=data;
        if(obj){
            myData.push(obj);
        }
        this.setState({
            data:myData
        },()=>{
            console.log('mydata',data)
        })
        if(window.localStorage){
            localStorage.setItem('mylocalStorage',JSON.stringify(this.state.data));
        }
    }

    deleteData=(object)=>{
        const {data} = this.state;
        let deleteContent=data.filter((obj)=>{
            return obj.name !== object.name
        });
        this.setState({
            data:deleteContent
        })
    }

    render(){
        const {name,data} =this.state;
        return(
            <React.Fragment>
               <div  className="container-fluid main-content">
                  <Header />
                   <Todo data={data}  deleteData={this.deleteData}/>
                  <Footer addData={this.addData}/>
               </div>
               {/* <style jsx>
                   {
                       `
                       .windowHeight{
                           height:${windowHeight}px
                       }
                       `
                   }
                   </style> */}
            </React.Fragment>
        )
    }
};

export default App;