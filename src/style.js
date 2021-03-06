import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
align-items: center;
h1{
    font-family: cursive;
}
body
{
  color: ${(props) => props.theme.mainColor} ;
  background-color: ${(props) => props.theme.backgroundColor}
};
`;
export const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fff", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#001219", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const Button = styled.button`
  background-color: #7ae582;
  margin-left: 4px;
  color: #004e64;
  margin-top: 5px;
`;
export const L = styled(Link)`
  margin-left: 4px;
`;
export const HomeDiv = styled.div`
  margin-top: 50px;
`;
export const FDiv = styled.div`
  background-color: #14213d;
  margin-top: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
`;

export const H2 = styled.h2`
  font-family: cursive;
  text-align: center;
  color: #004e64;
`;

export const P = styled.p`
  font-family: cursive;
  text-align: center;
  color: #004e64;
  margin-left: 150px;
  margin-right: 150px;
`;

export const IdeaDiv = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
  height: 550px;
  border-radius: 8px;
  background-color: #e5e5e5;
  margin-bottom: 15px;
  color: black;
`;

export const DetailDiv = styled.div`
  /* border-style: solid;
	border-width: 1px;
	border-color: gray; */
  margin-left: 160px;
  border-radius: 55px;
  /* background-color: #edf6ff; */
  color: black;
`;
export const Form = styled.form`
  margin-right: 400px;
  margin-left: 400px;
  margin-top: 150px;
`;
export const lisImage = styled.img`
  height: 600px;
`;
export const TextArea = styled.textarea`
  width: 350px;
  margin-left: 570px;
`;

export const SendButton = styled.button`
  width: 10px;
  background-color: unset;
  color: black;
`;
export const ChatImage = styled.img`
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
`;
export const ChatImageR = styled.img`
  float: right;
  max-width: 50px;
  width: 100%;
  margin-left: 20px;
  margin-right: 0;
  border-radius: 50%;
`;

export const Embed = styled.embed`
  width: 700px;
  height: 900px;
  margin-left: 300px;
`;

export const Forme = styled.div`
  text-align: center;
  width: 800px;
  height: 1500px;
  border-style: solid;
  border-width: 1px;
  margin-right: 400px;
  margin-left: 400px;
  margin-top: 100px;
  margin-bottom: 300px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  border-color: gray;
`;

export const BabeForme = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  padding-bottom: 300px;
  border-color: gray;
`;

export const ThanksDiv = styled.div`
  text-align: center;
  border-color: gray;
  font-family: cursive;
  font-size: 100px;
  color: black;
  text-align: center;
`;

export const ThanksDiv2 = styled.div`
  font-family: cursive;
  font-size: 25px;
  color: black;
  text-align: center;
`;

export const FooterL = styled(Link)`
  margin-left: 4px;
  text-decoration: unset;
  color: black;
`;

export const ButtonC = styled.button`
  background-color: greenyellow;
  margin-left: 4px;
  color: #004e64;
  width: 114px;
  margin-top: 5px;
`;

export const ButtonI = styled.button`
  background-color: #00f5d4;
  margin-left: 4px;
  color: #004e64;
  width: 114px;
  margin-top: 5px;
`;

export const ButtonD = styled.button`
  background-color: #0aff99;
  margin-left: 4px;
  color: #004e64;
  width: 114px;
  margin-top: 5px;
`;
export const ButtonP = styled.button`
  background-color: #ade8f4;
  color: #004e64;
  width: 114px;
  margin-top: 5px;
`;
export const P1 = styled.p`
  font-size: medium;
  font-weight: normal;
`;
export const L2 = styled(Link)`
  text-decoration: unset;
  font-size: large;
  font-weight: normal;
  margin-left: 110px;
`;
export const H4 = styled.h4`
  margin-top: 40px;
`;
export const H5 = styled.h5`
  margin-top: 17px;
  color: white;
`;
export const ButtonDiv = styled.div`
  margin-top: 10px;
`;
export const Input = styled.input`
  margin-left: 15px;
  border-radius: 4px;
  width: 210px;
  padding-left: 12px;
`;
export const ButtonS = styled.button`
  background-color: unset;
  color: #ffff;
  width: 114px;
  margin-top: 5px; ;
`;

export const CounterBox = styled.h1`
  color: black;
  text-align: center;
`;

export const MesBox = styled.div`
  width: 50%;
  border-style: outset;
  margin-left: 450px;
  margin-top: 40px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
`;

export const Mdiv = styled.div`
  margin-top: 50px;
  width: 400px;
  height: 400px;
  border-style: ridge;
  border: 2px black;
  border-radius: 12px;
  align-content: center;
  margin-left: 550px;
  margin-bottom: 10px;
  overflow: scroll;
`;
export const B = styled.b`
  margin-right: 7px;
`;
export const B2 = styled.b`
  margin-left: 168px;
`;
export const IdeaInput = styled.input`
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  margin-left: 7px;
`;
export const IdeaInput2 = styled.input`
  width: 100px;
`;
export const Body = styled.body`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
`;

export const ImageLogo = styled.img`
  width: 360px;
  height: 250px;
`;

export const Imgoo = styled.img`
  width: 25px;
  height: 25px;
`;

export const ListImage = styled.img`
  width: 326px;
  height: 230px;
  border-radius: 8px;
`;
export const Divv = styled.div`
  width: 326px;
  height: 50px;
`;
export const BB = styled.b`
  margin-right: 7px;
  margin-left: 12px;
`;
export const PB = styled.b`
  margin-right: 7px;
  margin-left: 157px;
`;
export const Label = styled.label`
  margin-top: 20px;
`;
export const ButtonCard = styled.button`
  background-color: #fca311;
  border-radius: 8px;
  color: #004e64;
  margin-top: 5px;
`;
export const ImageD = styled.img`
  border-radius: 14px;
  height: 500px;
  width: 794px;
`;
export const Abutton = styled.button`
  width: 700px;
  margin-left: 50px;
  margin-bottom: 10px;
  border-radius: 8px;
`;
export const DivColor = styled.div`
  background-color: #e5e5e5;
  color: black;
  border-radius: 14px;
`;

export const DivB = styled.div`
  border-style: solid;
  border-width: 1px;
  margin-bottom: 20px;
  margin-top: 80px;
  border-color: white;
  border-radius: 14px;
  margin-left: 140px;
  margin-right: 140px;
`;
export const P6 = styled.p`
  font-family: cursive;
  text-align: center;
  color: #004e64;
  margin-left: 100px;
  margin-right: 100px;
`;
export const ListImage2 = styled.img`
  width: 255px;
  height: 230px;
  border-radius: 8px;
`;

export const Charts = styled.div`
  width: 300px;
  height: 300px;
  margin-left: 110px;
`;

export const Pad = styled.div`
  margin-left: 20px;
`;

export const DivLimit = styled.div`
  height: 75%;
  width: 80%;
`;

export const HH1 = styled.h1`
  margin-left: 160px;
`;

export const FullDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3%;
`;
export const MsgList = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 50px;
`;
// export const MsgList2 = styled.div`
// 	header: 500px;
// `;

export const FullDiv2 = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10%;
`;

export const Wdiv = styled.div`
  width: 90%;
  margin-left: 90px;
`;

export const Tabo = styled.table`
  width: 80%;
  margin-left: 140px;
  margin-top: 80px;
  margin-bottom: 80px;
  border-color: white;
`;

export const Odiv = styled.div`
  /* margin-top: 120px; */
  margin: 0;
  overflow: hidden;
  height: 100%;
`;
export const ImageP = styled.img`
  height: 400px;
  width: 300px;
`;
export const DivList = styled.div`
  margin-top: 35px;
`;
export const Daiagram = styled.div`
  width: 50%;
  height: 50px;
  margin-left: 420px;
`;
export const Span = styled.span`
  color: black;
  font-size: 12px;
`;
