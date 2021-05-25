
function LoginForm() {
    return (
        <>
        <form>
            <label for="mail">Email</label> <br/>
            <input id="mail" className="w-100" type="email" required /> <br/><br/>
            <label for="password">Password</label> <br/>
            <input id="password" className="w-100" type="password" required /> <br /><br />
            <input type="checkbox" id="rememberMe" /> <label for="rememberMe">&nbsp; Remember me</label><br />
            <center><button type="button" className="btn btn-success w-50">LOGIN</button></center>
        </form> 

        <a>Forgot Password?</a><br/><br/>
        <div>
            <p>Connect with:</p>
            <center>
                <button type="button" className ="btn btn-primary text-center">Facebook</button>
                <button type="button" className ="btn btn-danger">Gmail</button>
            </center>
        </div>
        </>
    )
}

export default LoginForm;