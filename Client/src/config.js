
let SignUp_API ;

if (process.env.NODE_ENV === 'production') {
    SignUp_API = {
        SaveUserDetails : 'https://ex.com'
    };
}
else {
    SignUp_API = {
        SaveUserDetails : 'http://localhost:3700/users/save_usersData',

    };
}

export default SignUp_API