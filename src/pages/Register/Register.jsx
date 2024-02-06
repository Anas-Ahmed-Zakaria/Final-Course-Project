import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function Register() {
    const navigate = useNavigate();
    const [userData , setUserData] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        gender: "",        
    });

    const RegisterFetchUserData = async (useData) => {
        try {
            const {data} = await axios.post("http://localhost:3000/register" , useData);
            localStorage.setItem("userToken" , JSON.stringify(data.accessToken));
            navigate("/");
        }catch(err) {
            toast.error(err.response.data);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        RegisterFetchUserData(userData);
        console.log(userData);
    };

    const handleChange = (e) => {
        const newUserData = { ...userData };
        newUserData[e.target.name] = e.target.value;
        setUserData({ ...newUserData });
    };

   
  return (
    <>
     <div className="Register__page mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <PageTitle title="Register Page"/>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <div className="card bg-light shadow">
                            <div className="card-header">
                                <h2>User Registeration</h2>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">User Name <span className="text-danger">*</span></label>
                                            <input onChange={handleChange} className="form-control" type="text" name="name" id="name" />
                                        </div>
                                        <br />
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password">Password <span className="text-danger">*</span></label>
                                            <input onChange={handleChange} className="form-control" type="password" name="password" id="password" />
                                        </div>
                                        <br />
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email <span className="text-danger">*</span></label>
                                            <input onChange={handleChange} className="form-control" type="email" name="email" id="email" />
                                        </div>
                                        <br />
                                    </div> 

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone <span className="text-danger">*</span></label>
                                            <input onChange={handleChange} className="form-control" type="number" name="phone" id="phone" />
                                        </div>
                                        <br />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="country">Country <span className="text-danger">*</span></label>
                                            <select onChange={handleChange} className="form-control" name="" id="country">
                                                <option value="Egypt">Egypt</option>
                                                <option value="USA">USA</option>
                                                <option value="UK">UK</option>
                                                <option value="France">France</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Spain">Spain</option>
                                                <option value="India">India</option>
                                            </select>
                                        </div>
                                        <br />
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <textarea onChange={handleChange} className="form-control" name="address" id="address"></textarea>
                                        </div>
                                        <br />
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <br />
                                            <br />
                                            <input onChange={handleChange} type="radio" name="gender" id="Male"/>
                                            <label htmlFor="Male" className="me-2">Male</label>

                                            <input onChange={handleChange} type="radio" name="gender" id="Female"/>
                                            <label htmlFor="Female">Female</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer d-flex gap-2 align-items-center">
                                <button type="submit" className="btn btn-primary">Register</button>
                                <Link to="/">Have Account?</Link>
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
