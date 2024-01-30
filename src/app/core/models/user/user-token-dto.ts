import { UserDTO } from "./user-dto";

export interface UserTokenDTO {
    user : UserDTO;
    token: string;
}
