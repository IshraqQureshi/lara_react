import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from './AuthUser';

export default function Register() {

    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const navigate = useNavigate();

    const submitForm = () => { 
        http.post('/register', {
            email: email,
            password: password,
            name: name
        }).then(res => {
            navigate('/login');
        })
    }

    return (
        <>
            <div className="row justify-content-center p-5">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submitForm}>Register</button>
                    </div>
                </div>
            </div>
        </>
    );
}