import { useNavigate, useParams } from "react-router-dom";
import Landing from "./Landing";


function Countries() {
  const params = useParams();
  const navigate = useNavigate();
  console.log("countries", params);
     
      return (
        <> 
        <Landing/>


        </>
      );
  }

export default Countries;
        
    