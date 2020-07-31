import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import SpacePost from '../components/SpacePost'

const GetPostContainer = ({ token }) => {
    const [ post, setPost ] = useState('');
    const [ loading, setLoading ] = useState(true);

    let { post_id } = useParams();
    useEffect(() => {
        setLoading(true);
        let config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}}`,
            },
        }
        fetch(`http://127.0.0.1:8000/api/posts/${post_id}`, config)
        .then((result) => result.json())
        .then((res) => {
            console.log(res)
            setPost(res)
            setLoading(false);
        })
        .catch((err) => setLoading(false))
    }, [])
    return (
        <SpacePost { ...post } loading={loading}/>
    );
};
const mapStateProps = (state) => {
    return {
        token: state.userSign.userData.token,
    };
};
export default connect(mapStateProps, null)(GetPostContainer);