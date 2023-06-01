export const loginDatas = [
    {
        email: '',
        password: 'password123',
        cases: {
            name: 'Verify user not able to login without email',
            message: 'Enter Valid Email',
            type: 'bottom-input-error'
        }
    },
    {
        email: 'invalidemail',
        password: 'password123',
        cases: {
            name: 'Verify user not able to login with invalid email',
            message: 'Enter Valid Email',
            type: 'bottom-input-error'
        }
    },
    {
        email: 'test@test.com',
        password: '',
        cases: {
            name: 'Verify user unsuccessfull to login without password',
            // Incorrect error message, it should be 'Enter Password'
            message: 'Enter Valid Email',
            type: 'bottom-input-error'
        }
    },
    {
        email: 'test@test.com',
        password: 'wrongpassword',
        cases: {
            name: 'Verify user unsuccessfull to login with wrong password',
            message: 'Wrong Email or Password',
            type: 'snackbar'
        }
    },
    {
        email: 'test@test.com',
        password: 'password123',
        cases: {
            name: 'Verify user successfull to login with valid email and password',
            message: '',
            type: 'redirect'
        }
    },
]