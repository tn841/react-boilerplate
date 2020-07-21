import React, {useEffect} from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LangdingPage(props) {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHander = (event) => {
        axios.get('/api/user/logout')
        .then(res => {
            if(res.data.success){
                props.history.push('/login')
            } else {
                alert('로그아웃 실패');
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHander}>
                로그아웃
            </button>
        </div>
    )
}

// 참고 : https://create-react-app.dev/docs/proxying-api-requests-in-development/

export default withRouter(LangdingPage)
