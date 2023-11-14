import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <h3>***메인화면***</h3>
            <hr />
            <p><Link to={'/user/writeForm'}>입력</Link></p>
            <p><Link to={`/user/list/${0}`}>출력</Link></p>

            <p><Link to='/USER/UPLOADfORM'>이미지 업로드</Link></p>
        </div>
    );
};

export default index;