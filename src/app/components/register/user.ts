export interface User {
    user_id?: String,
    name: String,
    surname: String,
    tel: String,
    date_birth: String,
    address: String,
    city: String,
    cp: Number;
    email: String,
    password: String,
    dni?: String,
    role?: String,
    remembertoken?: String,
    status?: Boolean,
}