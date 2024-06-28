import { useState } from "react";



const Home = () => {

    let [user, setUser] = useState({});

    const getValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="">Email :- </label>
                    <input type="text" name="email" value={user.email ? user.email : ""} placeholder="Enter Your Email" onChange={(e) => getValue(e)} />
                </div>
                <div>
                    <label htmlFor="">Password :- </label>
                    <input type="text" name="pass" value={user.pass ? user.pass : ""} placeholder="Enter Your Password" onChange={(e) => getValue(e)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Home;