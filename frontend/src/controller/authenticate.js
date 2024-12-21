import React,{useState} from "react";
import axios from "axios";
function Authenticate()
{
 
    const [uuidinput,setuuidinput]=useState("");
    const [status,setstatus]=useState("Please provide the ID");

    const authen = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/api/participants/checkin", { qrCode: uuidinput });
        setstatus(response.data.message);
      };

    return (
        <div>
            <h1>hello verify your id</h1>
            <form>
                <input type="text" name="uuid" onChange={(e)=>setuuidinput(e.target.value)} placeholder="please provide the id" required/>
                <button type="submit" onClick={authen}>Verify</button>
            </form>

            <h3>{status}</h3>
        </div>
    );
}

export default Authenticate;
