import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Singup.module.css';
import { validate } from './validate';
import { notify } from './toast';
import {Link} from 'react-router-dom';


const SignUp = () => {

    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    
    useEffect(()=> {
        setErrors(validate(data , "singUP"))
        // console.log(errors)
    }, [data, touched])

    const changeHandler = event => {
        if(event.target.name === "isAccepted"){
           setData({...data, [event.target.name] : event.target.checked})
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
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
            name: true,
            email:true,
            password:true,
            confirmPassword:true,
            isAccepted:true
        })
        notify("Invalid data!" , "error")
      }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Sing up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input className={errors.name && touched.name ? styles.uncompeleted : styles.formInput}
                    type="text" 
                    name="name"
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} />
                    {errors.name && touched.name &&<span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input className={errors.confirmPassword && touched.confirmPassword ? styles.uncompeleted : styles.formInput}
                    type="password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword &&<span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                  <div>
                    <label>I accepte terms of privacy policy</label>
                    <input className={styles.checkBox}
                    type="checkbox" 
                    name="isAccepted" 
                    value={data.isAccepted} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} />
                  </div>
                    {errors.isAccepted && touched.isAccepted &&<span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButton}>
                    <Link to="/login" >Login</Link>
                    <button type='submit' >Sing up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;