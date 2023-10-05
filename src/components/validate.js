// import { Type } from "react-toastify/dist/utils";

export const validate = (data , type) => {

    const errors = {};

    if(!data.email){
        errors.email = "email required"
    }else if(!/\S+@+\S+\.\S/.test(data.email)) {
       errors.email = "email adress is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
       errors.password = "password required"
    }else if(data.password.length < 6){
        errors.password = "password need to be 6 charecter or more"
    }else{
        delete errors.password
    }

    if(type == "singUp"){
        
        if(!data.name.trim()){
            errors.name = "username required"
        }else{
            delete errors.name
        }

    if(!data.confirmPassword){
        errors.confirmPassword = "confirmpassword required"
    }else if(data.confirmPassword !== data.password ){
        errors.confirmPassword = "password do not match"
    }else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted = "accept our regulation"
    }

    }

    return errors ;
}