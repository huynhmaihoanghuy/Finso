import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const ProfileForm = ({ onSubmit, user, submitName }) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label className="required">Username</Form.Label>
                    <Form.Control defaultValue={user && user.username} ref={register({ required: true, minLength: 4 })} name="username" type="text" placeholder="Username" />
                    {errors.username && errors.username.type === 'required' && <Form.Text className="error">* This is required</Form.Text>}
                    {errors.username && errors.username.type === 'minLength' && <Form.Text className="error">* Length must be more than 4 characters</Form.Text>}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="required">Password</Form.Label>
                    <Form.Control defaultValue={user && user.password} ref={register({ required: true })} name="password" type="password" placeholder="Password" />
                    {errors.password && <Form.Text className="error">* This is required</Form.Text>}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="required">Name</Form.Label>
                    <Form.Control defaultValue={user && user.name} ref={register({ required: true })} name="name" type="text" placeholder="Name" />
                    {errors.name && <Form.Text className="error">* This is required</Form.Text>}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="required">Email</Form.Label>
                    <Form.Control defaultValue={user && user.email} ref={register({ required: true })} name="email" type="email" placeholder="Email" />
                    {errors.email && <Form.Text className="error">* This is required</Form.Text>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control defaultValue={user && user.phone} ref={register({ pattern: /[0-9]+/ })} name="phone" type="text" placeholder="Phone" />
                    {errors.phone && errors.phone.type === 'pattern' && <Form.Text className="error">* Phone number invalid</Form.Text>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control defaultValue={user && user.address} ref={register} name="address" type="text" placeholder="Address" />
                </Form.Group>

                <Button variant="primary" type="submit"> {submitName ? submitName : 'Submit'} </Button>
            </Form>
        </>
    )
}
