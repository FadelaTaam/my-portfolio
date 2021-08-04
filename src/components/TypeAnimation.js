import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'
class   Animation extends Component {
     render() {
    return (
        <div className='App'>
          <h5
            style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
          >
            J'aime {' '}
            <span style={{ color: 'white', fontWeight: 'bold', justifyItems: 'center' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Coder', "L'art", 'Lire', 'Voyager']}
                loop={18}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => console.log(`Done after 18 loops!`)}
              />
            </span>
          </h5>
        </div>
      );
    }
}
export default Animation;