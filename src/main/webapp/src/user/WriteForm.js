import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../css/WriteForm.module.css';
import mainImg from '../image/image.jpg';

const WriteForm = () => {
    const [userDTO, setUserDTO] = useState({
        name: '',
        id: '',
        pwd: ''
    })
    const { name, id, pwd } = userDTO

    const [nameDiv, setNameDiv] = useState('')
    const [idDiv, setIdDiv] = useState('')
    const [pwdDiv, setPwdDiv] = useState('')

    const navigate = useNavigate()

    const onInput = (e) => {
        const { name, value } = e.target

        setUserDTO({
            ...userDTO,
            [name]: value 
        })
    }

    //아이디 중복체크
    const onIsExistId = () => {
        //axios.get(`http://localhost:8080/user/isExistId?id=${id}`)
        axios.get(`/user/isExistId?id=${id}`)
             .then(res => {
                setIdDiv(res.data === 'non_exist' ? '사용 가능' : '사용 불가능')
             })
             .catch(error => console.log(error))
    }

    const onWriteSubmit = (e) => {
        e.preventDefault()

        var sw = 1
        if(!name) {
            setNameDiv('이름 입력')
            sw = 0
        }
        if(!id) {
            setIdDiv('아이디 입력')
            sw = 0
        }
        if(!pwd) {
            setPwdDiv('비밀번호 입력')
            sw = 0
        }
        if(sw === 1 && idDiv === '사용 가능') {

            //첫 번째
            /*
            //axios.post('http://localhost:8080/user/write', null, {
            axios.post('/user/write', null, {
                params: {
                    name: name,
                    id: id,
                    pwd: pwd
                }
            }).then(
                alert('회원가입을 축하합니다.'),
                navigate('/user/list')
            ).catch(error => console.log(error))
            */

            //두 번째
            //axios.post('http://localhost:8080/user/write', null, { params: userDTO })
            axios.post('/user/write', null, { params: userDTO })
                .then(
                    alert('회원가입을 축하합니다.'),
                    navigate('/user/list')
                ).catch(error => console.log(error))
        }
    }

    const onReset = (e) => {
        e.preventDefault()

        setUserDTO({
            name: '',
            id: '',
            pwd: ''
        })

        setNameDiv('')
        setIdDiv('')
        setPwdDiv('')
    }

    return (
        <div>
        	<h3>
        		<Link to='/'>
        		    <img src={ mainImg } alt='망상토끼' width='50' height='50' />
        		</Link>
        	</h3>
            <form className={ styles.writeForm }>
                <table border='1'>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type='text' name='name' value={ name } onChange={ onInput } />
                                <div id='nameDiv'>{ nameDiv }</div>
                            </td>
                        </tr>
                        
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type='text' name='id'  value={ id } onChange={ onInput } onBlur={ onIsExistId } />                                    
                                <div id='idDiv' style={{ color: idDiv === '사용 가능' ? 'blue' : 'red' }}>{ idDiv }</div>
                            </td>
                        </tr>

                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type='password' name='pwd' value={ pwd } onChange={ onInput } />
                                <div id='pwdDiv'>{ pwdDiv }</div>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan='2' align='center'>
                                <button onClick={ onWriteSubmit }>등록</button> &nbsp;
                                <button onClick={ onReset }>취소</button>
                            </td>
                        </tr>
                    </tbody>                    
                    <tfoot></tfoot>
                </table>
            </form>
        </div>
    );
};

export default WriteForm;