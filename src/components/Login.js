import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Singup.module.css';
import { validate } from './validate';
import { notify } from './toast';
import {Link} from 'react-router-dom';

const SignUp = () => {

    const [data , setData] = useState({
        email: "",
        password: "",
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    
    useEffect(()=> {
        setErrors(validate(data , "Login"))
        // console.log(errors)
    }, [data, touched])

    const changeHandler = event => {
            setData({...data , [event.target.name] : event.target.value})
    //   console.log(data)
    }

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
      event.preventDefault();
      if(!Object.keys(errors).length){
          notify("you singed up seccessfully", "success")
      }else{
        setTouched({
            email:true,
            password:true,
           
        })
        notify("Invalid data!" , "error")
      }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
               
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className={errors.email && touched.email ? styles.uncompeleted : styles.formInput}
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} />
                    {errors.email && touched.email &&<span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className={errors.password && touched.password ? styles.uncompeleted : styles.formInput}
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} />
                    {errors.password && touched.password &&<span>{errors.password}</span>}
                </div>
               
                <div className={styles.formButton}>
                    <Link to="/singup" >sing up</Link>
                    <button type='submit' >Log in </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;