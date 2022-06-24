function Connexion () {
    return (
        
   <div className="d-flex justify-content-center">
     <form>
    <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
    </div>
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
    </div>
    <div class="form-group">
        <label class="form-check-label"><input type="checkbox"></input>Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
   </div>
    )
}
export default Connexion;