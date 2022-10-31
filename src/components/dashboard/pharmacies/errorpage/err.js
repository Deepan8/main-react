import { Link } from "react-router-dom";


function Errorpage() {

    return(
        <>

        <h1>404 error </h1>
        <h3>Page not found </h3>
        <Link to='/Drug'>Go Back</Link>

        </>

    
       
    );
}

export default Errorpage;