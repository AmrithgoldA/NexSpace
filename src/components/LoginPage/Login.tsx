import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: () => {
            navigate("/profile")
        }
    });

    return (
        <div id="login" className="flex justify-center items-center min-h-full flex-col px-6 py-12 sm:w-screen sm:h-screen h-[100vh] bg-white dark:bg-black text-black dark:text-white">
            <div className="border-slate-500 border-2 min-h w-full sm:w-96 p-5 rounded-md mx-10">
                <div>
                    <p className="mb-2">NexSpace Welcome's You!!</p>
                    <div>
                        <button className="border-slate-500 border-2 rounded-md py-1 px-3 w-full transition-colors duration-300" onClick={() => login()}>
                            <span className="inline-flex h-full w-full items-center justify-center gap-2">
                                <FcGoogle />
                                Login With Google
                            </span>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between mt-5">
                    <div className="bg-slate-500 w-[45%] h-[0.2rem] my-5"></div>
                    <p className="pt-2">or</p>
                    <div className="bg-slate-500 w-[45%] h-[0.2rem] my-5"></div>
                </div>

                <div className="flex flex-col rounded-md">
                    <label htmlFor="email">Email: </label>
                    <input
                        className="border-slate-500 border-2 rounded-md py-1 px-4 mb-4 placeholder-slate-400 bg-white dark:bg-black"
                        id="email" type="email" placeholder="example@gmail.com"
                    />
                    <label htmlFor="password">Password: </label>
                    <input
                        className="border-slate-500 border-2 rounded-md py-1 px-4 placeholder-slate-400 bg-white dark:bg-black"
                        id="password" type="password" placeholder="********"
                    />
                </div>

                <div className="flex item-center justify-between mt-3">
                    <div className="flex items-center">
                        <input className="mr-2 cursor-pointer" type="checkbox" id="rememberme" />
                        <label className="cursor-pointer" htmlFor="rememberme">Remember me</label>
                    </div>

                    <a className="underline cursor-pointer">Forgot password?</a>
                </div>

                <div className="flex justify-center mt-4">
                    <button className="border-slate-500 border-2 rounded-md py-1 px-4">
                        Sign in
                    </button>
                </div>
            </div>
        </div>

    )
}