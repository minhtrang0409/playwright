import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage {
    private usernameSelector = "#ext-username";
    private passwordSelector = "#ext-password";
    private loginButtonSelector = "#ext-login-button";
    
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
