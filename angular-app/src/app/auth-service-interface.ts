import {SignupModel} from "./signupModel";
import {UserModel} from "./user-model";
export interface AuthServiceInterface {
    signup(signupModel: SignupModel);
    signin(user: UserModel);
    isLoggedIn();
}