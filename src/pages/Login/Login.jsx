import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import axios from "axios";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

export default function Login() {
    const [isLoading , setIsLoding] = useState(false);
    const navigate = useNavigate();
    const [userData , setUserData] = useState({
        password: "",
        email: "",      
    });


    const LoginFetchUserData = async (useData) => {
        setIsLoding(true);
        try {
            const {data} = await axios.post("http://localhost:3000/login" , useData);
            console.log(data);
            toast.success("Thank You For Login");
            setTimeout(() => {
                setIsLoding(false)
                navigate("/Home");
            },2000);

        }catch(err) {
            console.log(err);
            setIsLoding(true)
            setTimeout(() => {
                setIsLoding(false)
            },2000);
            toast.error(err.response.data);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        LoginFetchUserData(userData);
        console.log(userData);
    };

    const handleChange = (e) => {
        const newUserData = { ...userData };
        newUserData[e.target.name] = e.target.value;
        setUserData({ ...newUserData });
    };

  return (
    <>
     <div className="login__page mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <PageTitle title="Login Page"/>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <div className="card bg-light shadow">
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>

                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                    <input onChange={handleChange} className="form-control" type="email" name="email" id="email"/>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                    <input onChange={handleChange} className="form-control" type="password" name="password" id="password"/>
                                </div>
                            </div>

                            <div className="card-footer d-flex gap-2 align-items-center">
                                <button type="submit" className="btn btn-primary">{isLoading ? <LuLoader2 className="loader"/> : "Login"}</button>
                                <Link to={'/Register'}>Do not have account?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
