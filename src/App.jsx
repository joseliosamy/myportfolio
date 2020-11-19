import './aos.css';
import './global.css';
import './home.css';

import Content from './Content';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <div id="content">
                <Content />
            </div>

            <Footer />
        </>
    );
};

export default App;
