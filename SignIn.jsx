import { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import users from "../../databases/users.js";

function SignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState ("");
    const navigate = useNavigate();

    console.log({
        username: username,
        password: password,
    }); // Cara memastikan bahwa username dan password muncul di console dengan menggunakan object

    function handleLogin(event){
        event.preventDefault();

        const user = users.find((user) => user.username === username)
        if (user && user.password === password) {
            localStorage.setItem("login", "success");
            alert("Anda Yakin Ingin Masuk ???")
            navigate("/Loading");
        setTimeout (() => {
            navigate("/home")
        }, 2000);
        } else {
            localStorage.setItem("login", "failed");
            alert("Username atau Password anda salah");
        }

        // Menggunakan For Of

        // for (const user of users) {
        //     if (username === user.username && password === user.password) {
        //         localStorage.setItem("Login", "success");
        //         Navigate("/home");
        //     }
        // }

        console.log("user", users);
    }


    function handleUsername(username_user) {
        setUsername(username_user);
    }

    function kickPassword(password_user) {
        setPassword(password_user);
    }


    console.log(users);
    return (
        <>
        <div className="kotak">
            <div className="judul">
                <p className="teks-1">Sistem Informasi Keuangan</p>
            </div>

            <div className="deskripsi">
                <h3 className="teks-2">Harap Diisi !!!</h3>
            </div>

            <div className="form">
                <h1 className="username">Username</h1>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."
                onChange={(event) => handleUsername(event.target.value)}></input>
            </div>

            <div className="form-2">
                <h1 className="password">Password</h1>
                <input type="password" id="fname-2" name="firstname" placeholder="Your name.."
                onChange={(event) => kickPassword(event.target.value)}>
                </input>
            </div>

            <button className="submit" onClick={(event) => handleLogin(event)}>
            Submit
            </button>
            
            {/* onChange = {(event) => handleLogin(event.target.value)} */}
        </div>
        </>
    )
}

export default SignIn;

