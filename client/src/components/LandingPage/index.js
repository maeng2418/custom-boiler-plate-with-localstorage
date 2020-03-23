import React from 'react';
import userActionCreators from 'redux/actions/user_action';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(userActionCreators.logout())
      .then(response => {
        if (response.payload.success) {
          localStorage.removeItem('jwt');
          props.history.push('/login');
        } else {
          alert("로그아웃 하는데 실패했습니다.")
        }
      })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <h2>시작 페이지</h2>
      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default withRouter(LandingPage);
