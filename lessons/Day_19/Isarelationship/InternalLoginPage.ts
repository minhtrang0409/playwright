import LoginPage from "./LoginPage";

export default class InternalLoginPage extends LoginPage {

    private usernameSelector = "#username";
    private passwordSelector = "#password";
    private loginButtonSelector = "#login-button";

    public inputUsername(username: string): void {
        console.log(`Input username: ${username} for selector: ${this.usernameSelector}`);
    }
    public inputPassword(password: string): void {
        console.log(`Input password: ${password} for selector: ${this.passwordSelector}`);
    }

    public clickLoginButton(): void {
        console.log(`Click login button for selector: ${this.loginButtonSelector}`);
    }

}