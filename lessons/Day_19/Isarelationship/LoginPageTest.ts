import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./internalLoginPage";
import LoginPage from "./LoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginPage: LoginPage = new InternalLoginPage();
let externalLoginPage: LoginPage =  new ExternalLoginPage();

let internalLoginData = {
    username: "admin",
    password: "admin"
};

let externalLoginData = {
    username: "ext-admin",
    password: "ext-admin"
};

LoginTestFlow.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
LoginTestFlow.login(externalLoginPage, externalLoginData.username, externalLoginData.password); 