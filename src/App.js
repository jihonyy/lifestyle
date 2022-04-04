import logo from './logo.svg';
import styled from 'styled-components';


function App() {
  return (
    <Container> 
      <Title>Life Style <br/>라이프 스타일</Title>
      <Content>
          <Button style={{marginBottom:'15px'}}>라이프 스타일 시작</Button>
          <Button style={{background: '#FF6B73', color: 'white'}}>기존 회원으로 로그인</Button>
          <SNS >
            <img src="../main/facebook.svg"/>
            <img src="../main/kakao.svg"/>
            <img src="../main/apple.svg"/>
            <img src="../main/naver.svg"/>
            <img src="../main/google.svg"/>
          </SNS>
          <Text>SNS 간편로그인</Text>
      </Content>
    </Container>
  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  gap: 50px;
  color: white;
`

const Title = styled.div`
  color: white;
  text-align: center;
  width: 281px;
  height: 115px;
  font-weight: bold;
  font-size: 48px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 177px;
  height: 35px;
  background: #FFFFFF;
  border-radius: 16px;

  color: #FF6B73;
  font-weight: bold;
  font-size: 13px;

  cursor: pointer;
`

const SNS = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 25px;
  cursor: pointer;

`

const Text = styled.div`
  font-size: 15px;
`