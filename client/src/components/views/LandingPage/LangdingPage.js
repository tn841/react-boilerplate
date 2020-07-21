import React, {useEffect} from 'react'
import axios from 'axios';
function LangdingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>
        </div>
    )
}

// 참고 : https://create-react-app.dev/docs/proxying-api-requests-in-development/

export default LangdingPage
