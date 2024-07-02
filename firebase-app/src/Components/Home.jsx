import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";



const Home = () => {

    let [user, setUser] = useState({});
    let [getUser, setGetUser] = useState([]);

    let usersData = collection(db, "LoginUsers");

    const getValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(usersData, { email: user.email, password: user.pass })
        setUser({});
    }

    const getData = async () => {
        const getUser = await getDocs(usersData);
        setGetUser(getUser.docs.map((v) => ({ ...v.data(), id: v.id })))
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <br />
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
            <br />
            <section>
                {getUser.map((v) => {
                    return (
                        <>
                            <h2>Email :- {v.email}</h2>
                            <p>Password :- {v.password}</p>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Home;