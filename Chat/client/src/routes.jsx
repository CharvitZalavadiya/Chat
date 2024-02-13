import { useContext } from "react";
import { UserContext } from "./userContext";
import RegisterAndLoginForm from "./registerAndLoginForm";
import Chat from "./chat";

export default function Routes () {
    const {username, id} = useContext(UserContext)

    if(username){
        return (
            <Chat />
        )
    }

    return (
        <RegisterAndLoginForm />
    )
}