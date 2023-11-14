import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './main';
import WriteForm from './user/WriteForm';

import List from './user/List';
import UpdateForm from './user/UpdateForm';
import UploadForm from './user/UploadForm';


function App() {
  return (
    <BrowserRouter>
    <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={ <Index /> } />
          {/* 
          <Route path='/user/writeForm' element={ <WriteForm /> } />
          <Route path='/user/list' element={ <List /> } />
          <Route path='/user/updateForm/:userId' element={ <UpdateForm/>} />
          위나 아래 중 하나만*/}

          <Route path='/user'>
            <Route path='writeForm' element={ <WriteForm />} />
            <Route path='list/:page' element={ <List />} />

            <Route path='updateForm'>
              <Route path=':userId' element={ <UpdateForm />} />
            </Route>
            <Route path='uploadForm' element={ <UploadForm />}/>

          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
/*
          /가 들어온다면 localhost:3000/로 처음보이는 화면
*/

/*
REST API                     axios
                              => axios의 request method
Post : 데이터 등록 및 전송      axios.post()
GET : 데이터 조회              axios.get()
PUT : 데이터 수정              axios.put()  //업데이트쪽 메소드
DELETE : 데이터 삭제           axios.delete()

*/