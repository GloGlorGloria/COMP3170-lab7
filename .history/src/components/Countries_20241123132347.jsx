import { useNavigate, useParams } from "react-router-dom";


function Countries() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
     
      return (
        <> 
        <h1>Country Details</h1>

        </>
      );
  }

export default Countries;
        
    