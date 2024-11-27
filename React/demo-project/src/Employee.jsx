function Employee(props){
    console.log(props);
    
    return(
        <div>
            <h3 className="text-center text-danger">Employee Details!!!</h3>

            <h3>Data from parent: <span>{props.dataFromParent}</span></h3>
            <h3>Designation: <span className="text-secondary" >{props.desig}</span></h3>
            <h3>Status: <span>{props.empStatus}</span></h3>
        </div>
    )
}

// to use it in app.jsx. ie, root file
export default Employee