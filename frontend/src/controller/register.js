import React,{useState} from "react";
import axios from "axios";
function Register()
{


    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qrCode, setQrCode] = useState('');

  const register = async (e) => {
    e.preventDefault(); // prevent form submission from reloading the page
    const response = await axios.post('http://localhost:5000/api/participants/register', { name, email });
    setQrCode(response.data.qrCode);
  };
  
  return (
    <div>
      <h2>Event Registration</h2>
      <form onSubmit={register}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </div>
  );
}

export default Register;
