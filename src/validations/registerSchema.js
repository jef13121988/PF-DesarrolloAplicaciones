import { object, ref, string } from 'yup'

export const registerSchema = object({

        confirmPassword: string()
                .required("Contraseña requerida")
                .oneOf( [ ref("password"), null ], "Las contraseñas no coinciden" ),

        password: string()
                .required("Contraseña requerida")
                .min( 8, "Mínimo 8 caracteres" )
                .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Debe contener mayúscula, minúscula y número" ),
                
        email: string()
                .required("Email requerido")
                .email("Email no válido"),
    
})