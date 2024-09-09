
import { Auth } from "../components/Auths";
import Quote from "../components/qoutes";
function SignUp(){
    return(

        <div className="w-full overflow-hidden h-screen flex justify-center lg:grid lg:grid-cols-2">
            <div>
                <Auth type={"signup"}/>
            </div>
            <div className="hidden lg:block">
                <Quote/>
            </div>

        </div>
    )
 
}


export default SignUp;