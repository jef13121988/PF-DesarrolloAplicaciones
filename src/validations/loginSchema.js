import {object,string} from 'yup'

export const loginSchema = object({
    password:string()
                .required("Contraseña requida")
                .min(8,"Mínimo 8 caracteres")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Debe contener mayúscula, minúscula y número"),
    email:string()
            .required("Email requerido")
            .email("Email no válido"),
    
})