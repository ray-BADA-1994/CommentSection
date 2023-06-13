import { useState } from "react"
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"

const AuthPage = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="flex justify-center items-center">
      <SignUpForm toggle={toggle} setToggle={setToggle} />
      <LoginForm toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default AuthPage