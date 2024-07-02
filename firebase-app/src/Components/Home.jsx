import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";



const Home = () => {

    let [user, setUser] = useState({});
    let [getUser, setGetUser] = useState([]);
    let [id,setId] = useState(null)

    let usersData = collection(db, "LoginUsers");

    const getValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id === 0) {
        await addDoc(usersData, { email: user.email, password: user.password })
        setUser({});
        getData();
        } else {
            await updateDoc(doc(db, "LoginUsers", id), { email: user.email, password: user.password });
            setUser({});
            getData();
            setId(null);
        }
    }

    const getData = async () => {
        const getUser = await getDocs(usersData);
        setGetUser(getUser.docs.map((v) => ({ ...v.data(), id: v.id })))
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteUser = async (id) => {
        const deleteData = doc(db,"LoginUsers",id);
        await deleteDoc(deleteData);
        getData()
    }

    const editUser = async (v) => {
        setUser({email : v.email,password:v.password});
        setId(v.id);
    }

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
                    <input type="text" name="password" value={user.password ? user.password : ""} placeholder="Enter Your Password" onChange={(e) => getValue(e)} />
                </div>
                <button type="submit">{id ? "Edit": "Submit"}</button>
            </form>
            <br />
            <section>
                {getUser.map((v) => {
                    return (
                        <>
                            <h2>Email :- {v.email}</h2>
                            <p>Password :- {v.password}</p>
                            <button onClick={()=>deleteUser(v.id)}>Delete</button>
                            <button onClick={()=>editUser(v)}>Edit</button>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Home;