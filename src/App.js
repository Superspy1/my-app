import './App.css';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const imagesImported = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

function App() {
  const isMobile = window.innerWidth <= 600;
const images = Object.keys(imagesImported).map(image => ({
  original: imagesImported[image],
  thumbnail: imagesImported[image],
  originalClass: 'roundedImage',
  thumbnailClass: 'roundedImage'
}));

  return (
    <div style={{ backgroundColor: 'pink', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        backgroundColor: '#17171a',
        width: '90%',
        height: isMobile ? '94%': '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'pink',
        borderRadius: '20px',
        backgroundImage: `radial-gradient(circle at 1% 1%, red 1px, transparent 1px),
                          radial-gradient(circle at 10% 10%, orange 1px, transparent 1px),
                          radial-gradient(circle at 20% 20%, yellow 1px, transparent 1px),
                          radial-gradient(circle at 30% 30%, green 1px, transparent 1px),
                          radial-gradient(circle at 40% 40%, blue 1px, transparent 1px),
                          radial-gradient(circle at 50% 50%, indigo 1px, transparent 1px),
                          radial-gradient(circle at 60% 60%, violet 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        padding: '20px'
      }}>
        <h1 className="baking-title" style={{ marginTop: isMobile ? '1vh': '0'}}>Sprinkles</h1>
        <h4 className="baking-title1" style={{ marginTop :isMobile ? '-8vh': '-10vh' }}>Custom cakes and cupcakes</h4>
        <div style={{ width: '220px', height: '200px'}}>
        <ImageGallery items={images} additionalClass="roundedImage" />
        </div>
        <h4 className="baking-title1" style={{ marginTop: '20vh'}}>Order Now/Support Me!</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '200px' , marginBottom: isMobile ? '30vh' :'0'}}>
          <a href="mailto:sprinklesbymaioxley@gmail.com" style={{ color: 'pink' }}><FaEnvelope size={40} className="icon" /></a>
          <a href="https://www.facebook.com/SprinklesbyMaiOxley" style={{ color: 'pink' }}><FaFacebook size={40} className="icon" /></a>
          <a href="https://www.instagram.com/sprinklesbymaioxley" style={{ color: 'pink' }}><FaInstagram size={40} className="icon" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;


