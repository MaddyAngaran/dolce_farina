import orange from '../photos/orange.jpg';
import blueberry from '../photos/blueberry.jpg';
import twins from '../photos/twins.jpg';

import cake1 from '../photos/cake1.jpg';
import cake2 from '../photos/cake2.jpg';
import cake3 from '../photos/cake3.jpg';
import cake4 from '../photos/cake4.jpg';
import cake5 from '../photos/cake5.jpg';
import cake6 from '../photos/cake6.jpg';
import cake7 from '../photos/cake7.jpg';
import cake8 from '../photos/cake8.jpg';
import cake9 from '../photos/cake9.jpg';
import cake10 from '../photos/cake10.jpg';



function Home(){
    return(
        <div className='App-header'>
                <div class="banner">
                    <img src={orange} alt="orange" />
                    <img src={twins} alt="twins" />
                    <img src={blueberry} alt="blueberry"/>
                </div>
            <div className="Outer-order">
                <div className='Order'>
                    <a href="https://ig.me/m/dolcefarina_">Order Now</a>
                </div>
            </div>

            <h1 className='Home-header'>Making the community sweeter one day at a time</h1>
            <div className='Photo-album'>
                <div class="image-border">
                    <div class="image-container">
                        <img src={cake1} alt="cake1" />
                        <img src={cake2} alt="cake2" />
                        <img src={cake3} alt="cake3"/>
                        <img src={cake4} alt="cake4" />
                        <img src={cake5} alt="cake5" />
                    </div>
                </div>
                <div class="image-border">
                    <div class="image-container">
                        <img src={cake6} alt="cake6" />
                        <img src={cake7} alt="cake7" />
                        <img src={cake8} alt="cake8"/>
                        <img src={cake9} alt="cake9" />
                        <img src={cake10} alt="cake10" />
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Home;