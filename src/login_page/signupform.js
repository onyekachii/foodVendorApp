function SignupForm() {
    return (
        <>
            <h2>Create Account</h2>
            <form>
                <label for="firstname">First Name </label> <br />
                <input type="text" id="firstname" className ="w-100" /><br /><br />
                <label for="lastname">Last Name</label><br />
                <input type="text" id="lastname" class="w-100" /><br /><br />
                <label for="mail_signup">Email</label><br />
                <input type="email" id="mail_signup" class="w-100" /><br /><br />
                <label for="phone">Phone Number</label><br />
                <input type="tel" id="phone" class="w-100" /><br /><br />
                <label for="password_signup">Enter Password</label><br />
                <input type="password" id="password_signup" class="w-100" /><br /><br />
                <label for="password_signup2">Re-enter Password</label><br />
                <input type="password" id="password_signup2" class="w-100" /><br /><br />
                <button type="button" class="btn btn-success w-100">CREATE ACCOUNT</button>
            </form>
            <p>By creating an account, you have accepted our <a href="#">terms and conditions</a></p>
            <div>

                <p>Connect with:</p>
                <center>
                    <button type="button" class="btn btn-primary text-center">Facebook</button>
                    <button type="button" class="btn btn-danger" >Gmail</button>
                </center>
            </div>

        </>
    )
}

export default SignupForm;