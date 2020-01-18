import React,{Component} from 'react';

class Footer extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
        }
    }

    myMethod=(event)=>{
        this.setState({
            name: event.target.value
      },()=>{
          console.log("name is " , this.state.name)
      });
        event.preventDefault();
    }

    HandleSubmit=(event)=>{
        const {name}= this.state;
        let localData={name:name};
        this.props.addData(localData);
    }

    render(){
        return(
            <React.Fragment>
                <div></div>
                <div className="col-md-12 bg-info footer mx-auto p-2">
                    <div className="d-flex justify-content-center">
                        <input type="text" placeholder="name" className="form-control col-md-4" onChange={this.myMethod}/>
                        <button className="btn btn-success" onClick={this.HandleSubmit}>Add</button>
                    </div>
                </div>

                <style jsx>
                    {
                        `
                        .footer{
                            flex:1;
                        }
                        `
                    }
                </style>
            </React.Fragment>
        )
    }
};

export default Footer;