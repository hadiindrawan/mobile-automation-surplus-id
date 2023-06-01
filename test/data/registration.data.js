export const registerDatas = [
    {
        name: 'test',
        email: 'invalidemail',
        password: 'password123',
        confirm_password: 'password123',
        cases: {
            name: 'Verify user not able to register with invalid email',
            message: 'Enter Valid Email',
            type: 'bottom-input-error'
        }
    },
    {
        name: 'test',
        email: 'test@test.com',
        password: 'password123',
        confirm_password: 'notmatch',
        cases: {
            name: 'Verify user not able to register with invalid password',
            message: 'Password Does Not Matches',
            type: 'bottom-input-error'
        }
    },
    {
        name: '',
        email: 'test@test.com',
        password: 'password123',
        confirm_password: 'password123',
        cases: {
            name: 'Verify user not able to register without name',
            message: 'Enter Full Name',
            type: 'bottom-input-error'
        }
    },
    {
        name: 'test',
        email: '',
        password: 'password123',
        confirm_password: 'password123',
        cases: {
            name: 'Verify user not able to register without email',
            message: 'Enter Valid Email',
            type: 'bottom-input-error'
        }
    },
    {
        name: 'test',
        email: 'test@test.com',
        password: '',
        confirm_password: '',
        cases: {
            name: 'Verify user not able to register without password',
            message: 'Enter Password',
            type: 'bottom-input-error'
        }
    },
    {
        name: 'test',
        email: 'test@test.com',
        password: 'password123',
        confirm_password: 'password123',
        cases: {
            name: 'Verify user successful register with valid data',
            message: 'Registration Successful',
            type: 'snackbar'
        }
    },
    {
        name: 'test',
        email: 'test@test.com',
        password: 'password123',
        confirm_password: 'password123',
        cases: {
            name: 'Verify user unsuccessful register with same email',
            message: 'Email Already Exists',
            type: 'snackbar'
        }
    },
]