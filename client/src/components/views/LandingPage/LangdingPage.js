import React, {useEffect} from 'react'
import axios from 'axios';
function LangdingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            LangdingPage
        </div>
    )
}

// 참고 : https://create-react-app.dev/docs/proxying-api-requests-in-development/

export default LangdingPage
