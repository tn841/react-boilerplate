import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_action/user_action';

export default function(SpectificComponent, option, adminRoute = null) {
    /*
        * option?
        null : 아무나 접근 가능한 페이지
        true : 로그인한 유저만 접근 가능
        false : 로그인한 유저는 접근 불가능
    */
    function AuthenticationCheck(props){
        const dispatch = useDispatch();

        useEffect(() => { 
            dispatch(auth()).then(res => {
                console.log(res)
                
                //로그인 하지 않은 상태
                if(!res.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                } else {
                    // 로그인한 상태
                    if(adminRoute && !res.payload.isAdmin){
                        props.history.push('/')
                    } else {
                        if(!option){
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])

        return (
            <SpectificComponent/>
        )
    }

    return AuthenticationCheck
}