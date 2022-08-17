import { useState } from "react";
import AuthUser from './AuthUser';

export default function Login() {

    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => { 
        http.post('/login', {
            email: email,
            password: password
        }).then(res => {
            setToken(res.data.user, res.data.access_token);
        })
    }

    return (
        <>
            <div className="row justify-content-center p-5">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submitForm}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}