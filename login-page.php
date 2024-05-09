<?php 
include_once "header.php";
?>

<main class="main-container">
    <div class="login-container">
        <div class="login-container-text-container">
            <h1>Zaloguj się</h1>
            <div class="login-container-text">
                <p>Jeśli nie masz konta <span class="ac-col-specialtext">Zarejestruj się</span> aby korzystać z wszystkich naszych usług.</p>

            </div>
            <div class="login-container-text center-text">
            <p>Masz konto ale nie pamiętasz hasła? <a href="*">kliknij tutaj</a>.
            </div>
        </div>  
        <div class="login-container-form-container">
            <form method="post" action="login.php">
                <input type="text" name="login-page-login" placeholder="Login">
                <input type="password" name="login-page-password" placeholder="Haslo" >
                <input type="submit" value="Zaloguj się"> 
            </form>
        </div>
    </div>
</main>

<?php 
    include_once "footer.php";
?>