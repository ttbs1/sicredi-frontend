import React from "react";
import { Navigate } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.user === "ttbs1" && this.state.password === "123") {
            this.props.callback(this.state.user)
            localStorage.setItem('user', this.state.user)
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        return (
            <div className="home container d-flex justify-content-center">
                <div className="login col-10">
                    <form onSubmit={this.handleSubmit} method="post">
                        <input className="input-default" type="text" name="user" placeholder="username" onChange={this.handleChange} />
                        <input className="input-default" type="password" name="password" placeholder="password" onChange={this.handleChange} />
                        <div>
                            <button type="submit" className="button"><span>login</span></button>
                        </div>
                        {this.props.user ? <Navigate to="/dragon"></Navigate> : null}
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;