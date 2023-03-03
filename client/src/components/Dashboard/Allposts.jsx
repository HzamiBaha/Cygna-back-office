import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import AddBoxIcon from '@mui/icons-material/AddBox';

const Allposts = () => {
    const [postsData, setPostsData] = useState([]);
    const token = localStorage.getItem('token');
    const config = {
        headers: { 'auth-token': `${token}` },
    };

    useEffect(() => {
        axios.get('//localhost:3000/api/posts/', config)
            .then(response => {
                console.log(response.data)
                setPostsData(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });


    }, [setPostsData])



    return (
        <div className="allposts">
            <h3 className="page-title">Blogs on line</h3>
            <div className="devider"></div>
            <div className="articles-wrapper">
                {postsData.map((item, index) => (

                    <div key={index} className='articles-item'>
                        <div style={{ backgroundImage: `url(//localhost:3000/images/${item.image})` }} className='item-image' />

                        <h4 className="item-title">{item.name}</h4>
                        <button className="article-redirect"> savoir plus</button>

                    </div>
                ))}
                <button className='article-add'>
                    <AddBoxIcon  sx={{ fontSize: 60  ,color: '#863BFF'}}/>
                    <h4 className="item-title">Ajouter un nouveau article</h4>
                </button>
            </div>
        </div>
    )
}

export default Allposts