import Input from "../../components/forms/Input.jsx";
import Button from "../../components/forms/Button.jsx";
import Flex from "../../components/layout/flex/Flex.jsx";
import Center from "../../components/layout/Center.jsx";
import LoginIcon from "../../components/icons/LoginIcon.jsx";
import Checkbox from "../../components/forms/Checkbox.jsx";
import Padding from "../../components/layout/Padding.jsx";
import Container from "../../components/layout/Container.jsx";
import ReactIcon from "../../components/icons/ReactIcon.jsx";
import Label from "../../components/forms/Label.jsx";
import FlexStart from "../../components/layout/flex/FlexStart.jsx";
import {useState} from "react";

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    return (
        <Container width='100%' height='100vh'>
            <Center type='vertical' width='100%' height='100%'>
                <Flex width='100%' height='100%'>
                    <Center width='65%' height='100%' bgColor='#F6F5FA'>
                        <LoginIcon width={512} height={512}/>
                    </Center>
                    <Center width='35%' height='100%'>
                        <Padding padding={'6em'}>
                            <Flex flex={'vertical'} width='100%'>
                                <FlexStart>
                                    <ReactIcon width={28} height={28}/>
                                    <Label label='React' size={'1.25em'} bold={true}/>
                                </FlexStart>
                                <Input type={'text'} placeholder={'Email'} onChange={(e)=>{
                                    setLogin({...login, email: e.target.value})
                                }}/>
                                <Input type={'password'} placeholder={'Password'} onChange={(e)=> {
                                    setLogin({...login, password: e.target.value})
                                }}/>
                                <Checkbox label='Remember Me' onChange={()=>{
                                    setLogin({...login, rememberMe: !login.rememberMe});
                                }}/>
                                <Button label="Login" bgColor='#686BFF' color='white' onClick={()=>{
                                    console.log(login);
                                }}/>
                            </Flex>
                        </Padding>
                    </Center>
                </Flex>
            </Center>
        </Container>
    )
}

export default Login;