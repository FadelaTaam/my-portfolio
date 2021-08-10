import { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'
class   Animation extends Component {
     render() {
    return (
        <div className='App'>
          <h5
            style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', fontSize: '40px' }}
          >
            J'aime {' '}
            <span style={{ color: 'white', fontWeight: 'bold', justifyItems: 'center' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Coder', "L'art", 'Lire', 'Voyager']}
                loop={400}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => console.log(`Done after 400 loops!`)}
              />
            </span>
          </h5>
        </div>
      );
    }
}
export default Animation;