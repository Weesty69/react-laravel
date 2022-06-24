function Inscrption () {
    return (
   <div className="d-flex justify-content-center">
     <form className="w-25 p-5">
        <div class="form-group mb-2">
            <label for="inputEmail">Nom</label>
            <input type="email" class="form-control" name="name" placeholder="Email"></input>
        </div>
        <div class="form-group mb-2">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control" name="email" placeholder="Email"></input>
        </div>
        <div class="form-group mb-2">
            <label for="inputPassword">Mot de passe</label>
            <input type="password" class="form-control" id="password" placeholder="Password"></input>
        </div>
        <div class="form-group mb-2">
            <label for="inputPassword">Répeter le mot de passe</label>
            <input type="password" class="form-control" id="repeatpassword" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
   </div>
    )
}
export default Inscrption;