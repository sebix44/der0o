<?php 

include_once "header.php";

?>

<main class="main-container">
    <div class="register-form-container">
        <h1>Załóż konto</h1>
        <div class="register-form-container-text">
            <p>Zarejestruj się, aby w pełni korzystać z strony, tworzyć plany i wiele innych.</p>
        </div>
        <div class="register-form-container-text">
            <p>Lub jeśli masz już konto <a href="#">zaloguj się</a></p>
        </div>

        <div class="register-form-fields-container">
            <form method="post" action="register.php">
                <div class="register-form-field">
                    <label><span>Wpisz swój login: minimum 8 znaków</span>
                    <input type="text" placeholder="login" name="register-login"></label>
                </div>
                <div class="register-form-field">
                    <label><span>Wpisz swoje haslo: minimum 8 znaków</span>
                    <input type="password" placeholder="password" name="register-login"></label>
                </div>
                <div class="register-form-field">
                    <label><span>Powtórz swoje haslo: minimum 8 znaków</span>
                    <input type="password" placeholder="password" name="register-login"></label>
                </div>
                <div class="register-form-field-checkbox">
                   <div  class="register-form-checkbox-text"> <span>Jestem:</span></div>
                <label><span>Kobietą</span>
                    <input type="radio" name="register-sex" value="register-sex-m">
                </label>
                <label><span>Mężczyzną</span>
                    <input type="radio" name="register-sex" value="register-sex-k">
                </label><div style="clear:both"></div>
                </div>
                <div class="register-form-submit-container">
                    <input type="submit" value="Zarejestruj się">
                </div>
            </form>
        </div>
    </div>
</main>


<?php 

include_once "footer.php";

?>