import './components/styles/global.css';
import './components/styles/home.css';

import Content from './components/Content';
import Footer from './components/Footer';

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
