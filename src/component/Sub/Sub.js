const Sub = (props) => {
    return (
        <div>
            <p>This is sub component</p>
            <p>Sub ={parseInt(props.a)-parseInt(props.b)}</p> 
        </div>
    )
};

export default Sub;