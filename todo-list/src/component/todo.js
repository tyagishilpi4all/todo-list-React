import React,{Component} from 'react';

class Todo extends Component{
    
    deleteData=(obj)=>{
        console.log('delete data' ,obj);
        this.props.deleteData(obj);
    }

    render(){
        const {data} = this.props;
        return(
            <React.Fragment>
                {/* <div className="col-md-12"> */}
                     <div className="row">
                        {
                            data.map((obj,index)=>(
                                <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
                                    <div className="bg-white border">
                                       <div className="row">
                                            <div className="col-md-8">
                                                <p className="p-2">{obj.name}</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="p-2" onClick={()=>this.deleteData(obj)}>Delete</p>
                                            </div>
                                       </div>
                                    </div>
                                 </div>
                            ))
                        } 
                     </div>

                {/* </div> */}
                        {/* <style jsx>
                            {
                                `
                                
                                `
                            }
                        </style> */}
            </React.Fragment>
        )
    }
};

export default Todo;