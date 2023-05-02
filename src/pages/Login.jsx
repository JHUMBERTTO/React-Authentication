import '../assets/css/form.css'
const Login = () => {
  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form>
          <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="name@example.com"
            name='email'
            value=''
            onChange={() => {}}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Password"
            name='password'
            value=''
            onChange={() => {}}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  )
}

export default Login