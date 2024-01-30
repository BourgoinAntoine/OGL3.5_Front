import { UserRoleEnum } from "../enums/user-role-enum";

export interface UserDTO {
    id : number;
    username: string;
    email: string;
    role: UserRoleEnum;
}
