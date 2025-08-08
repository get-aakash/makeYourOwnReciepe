import React from 'react'

const SignInForm = () => {

    function handleOnSubmit(formData){
        
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email, password)
    }
    return (
        <section className='myForm'>
            <h1>SignUp form</h1>
            <form action={handleOnSubmit} className='signupForm'>
                <label htmlFor='email'>Email: </label>
                <input id='email' type="email" name='email' placeholder="john@doe.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name='password'  />
                <br />
                <button>Submit</button>


            </form>

        </section>
    )
}

export default SignInForm
