import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const RegisterForm = () => {
    return <>
    <Form className='my-3'>
        <Form.Group className='my-2'>
            <Form.Control type='text' placeholder='Username' name='username' required />
        </Form.Group>

        <Form.Group className='my-2'>
            <Form.Control type='password' placeholder='Password' name='password' required />
        </Form.Group>

        <Form.Group>
            <Form.Control type='password' placeholder='Confirm Password' name='password' required />
        </Form.Group>

        <Button className='my-2' variant='success' type='submit'>Register Now</Button>
    </Form>

    <p>Already have an account?
        <Link to='/login'>
            <Button className='mx-1' variant='info' size='sm'>Login</Button>
        </Link>
    </p>
    </>   
}

export default RegisterForm