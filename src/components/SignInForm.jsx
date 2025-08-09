import React from 'react'

const SignInForm = () => {
    const [unreadMessages, setUnreadMessages] = React.useState([])

    function handleOnSubmit(formData) {

        // const email = formData.get("email")
        // const password = formData.get("password")
        // const description = formData.get("description")
        // const employementStatus = formData.get("employementStatus")
        // const favColor = formData.get("favColor")
        // const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        const allData = {...data, dietaryRestrictions}
        console.log(allData)
        //console.log(email, password, description, employementStatus, dietaryRestrictions, favColor)
    }
    return (
        <section className='myForm'>
            <h1>SignUp form</h1>
            <form action={handleOnSubmit} className='signupForm'>
                <label htmlFor='email'>Email: </label>
                <input id='email' type="email" name='email' defaultValue="john@doe.com" placeholder="john@doe.com" />
                <br />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" defaultValue="password123" name='password' />
                <br />
                <label htmlFor="description">Description:</label>
                <textarea htmlFor="description" name="description" defaultValue="This is the description" id="description"></textarea>
                <fieldset>
                    <legend>Employement Status</legend>
                    <label htmlFor=""><input type="radio" defaultChecked={true} value="Unemployed" name='employementStatus' />Unemployed</label>
                    <label htmlFor=""><input type="radio"  value="Part-time" name='employementStatus' />Part-time</label>
                    <label htmlFor=""><input type="radio" value="Full-time" name='employementStatus' />Full-time</label>

                </fieldset>
                <fieldset>
                    <legend>Dietary Restrictions</legend>
                    <label htmlFor=""><input type="checkbox" defaultChecked={true} value="kosher" name='dietaryRestrictions' />Kosher</label>
                    <label htmlFor=""><input type="checkbox"  value="vegan" name='dietaryRestrictions' />Vegan</label>
                    <label htmlFor=""><input type="checkbox" value="gluten-free" name='dietaryRestrictions' />Gluten-freee</label>

                </fieldset>
                <label htmlFor="favColor">What is your favorite color?</label>
                <select name="favColor" id="favColor" defaultValue="">
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>


                <button>Submit</button>


            </form>

            <div className="container">
                {unreadMessages.length>1 && <h1>You have {unreadMessages.length} unread messages</h1>}
                {unreadMessages.length===0 && <h1>You have no unread messages</h1>}
                {unreadMessages.length===1 && <h1>You have 1 unread message</h1>}
            </div>

        </section>
    )
}

export default SignInForm
