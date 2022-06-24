function Connexion () {
    return (
        
   <div className="d-flex justify-content-center w-100">
    <form className="w-25 p-5">
        <div class="form-group mb-2">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
        </div>
        <div class="form-group mb-2">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
   </div>
    )
}
export default Connexion;