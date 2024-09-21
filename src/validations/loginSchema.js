import { object, string } from 'yup'

export const loginSchema = object({

        password: string()
                .required("Contraseña requerida")
                .min( 8, "Mínimo 8 caracteres" ),

        email: string()
                .required("Email requerido")
                .email("Email no válido"),
    
})