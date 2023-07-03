import TextBlockModul from './utils/TextBlockModul';
import ImgBlockModul from './utils/ImgBlockModul';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='TitleBlock'><h1>Заголовок</h1></div>
      <div className='Container'>
        <div className='textBlock'>
          <TextBlockModul key='TextBlockModul1' text='Текст ...' className='TextBlock1'/>
          <TextBlockModul key='TextBlockModul2' text='Не текст' className='TextBlock2'/>
          <TextBlockModul key='TextBlockModul3' text='Текст?' className='TextBlock3'/>
        </div>
        <div className='imgBlock'>
          <ImgBlockModul key='ImgBlockModul1' src='https://avatars.mds.yandex.net/i?id=95635ff9c64937f9ac5ed534b2fd4ae9f5d1114b-8320910-images-thumbs&n=13' alt='img #1' className='ImgBlock1'/>
          <ImgBlockModul key='ImgBlockModul2' src='https://avatars.mds.yandex.net/i?id=bf981f40b9cad9ec2964ee50a9034d349d769e1f-9699789-images-thumbs&n=13' alt='img #2' className='ImgBlock2'/>
          <ImgBlockModul key='ImgBlockModul3' src='https://avatars.mds.yandex.net/i?id=4c35407deff751b43d17f0833ce874f5-5886887-images-thumbs&n=13' alt='img #3' className='ImgBlock3'/>
        </div>
      </div>
    </div>
  );
}

export default App;
