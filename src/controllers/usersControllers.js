const controladorUsers =
{
      iniciarSesion: (req,res) => {
        res.render("users/login");
      },

      registrarse: (req,res) => {
        res.render("users/register");
      }
}

module.exports = controladorUsers;
