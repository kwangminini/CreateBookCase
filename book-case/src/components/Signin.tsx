import { Button, Col, Input, InputRef, Row } from "antd";
import { useRef } from "react";
import { LoginReqType } from "../types";
import styles from "./Signin.module.css";

interface SigninProps{
    login: (reqData: LoginReqType) => void;
}

const Signin:React.FC<SigninProps> = ({login}) => {
    const emailRef = useRef<InputRef>(null);
    const passwordRef = useRef<InputRef>(null);
    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}>
                        <img src="/bg_signin.png" alt="Signin" className={styles.signin_bg}/>

                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
                        <div className={styles.signin_underline}/>
                        <div className={styles.email_title}>
                            Email
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input ref={emailRef} placeholder="Email" autoComplete="email" name="email" className={styles.input}/>
                        </div>
                        <div className={styles.password_title}>
                            Password
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input ref={passwordRef} type="password" autoComplete="curront-password" className={styles.input}/>
                        </div>
                        <div className={styles.button_area}>
                            <Button className={styles.button} size="large" onClick={click}>Sign In</Button>
                        </div>


                    </Col>
                </Row>
            </Col>
        </Row>
    )

    function click(){
        const email = emailRef.current!.input!.value;
        const password = passwordRef.current!.input!.value;

        login({email, password});
    }
}

export default Signin;