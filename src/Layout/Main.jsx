import React, { useEffect, useState } from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';


const Main = () => {

    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/travels')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    


    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;