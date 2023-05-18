const Add = (props) => {                               // Add.js is not component and Add function is component
    return (
        <div>                                          
            <p>This is Add component 1</p>
            <p>Add ={parseInt(props.a)+parseInt(props.b)}</p>                   
        </div>
    )
};

export default Add;