
import { useState } from 'react';
import GlitchText from 'react-glitch-effect/core/GlitchText';
{/*import { StyleSheet } from 'react-native';*/}

// <button onClick={handleToggleGlitch}>TOGGLE EFFECT</button>//

const Glitch = () => {
  const [isDisabled, setDisabled] = useState(false);

  const handleToggleGlitch = () => {
    setDisabled(!isDisabled);
  };

  return (
    <div id='popImage'>

      <GlitchText component='h1' disabled={isDisabled}>
        <h2>Développeuse Web & Mobile Junior</h2>
      </GlitchText>

    </div>
  )
};
{/* const styles = StyleSheet.create ({
  color1: {
    color: 'yellow'
  },
  color2: {
    color: 'purple'
  }

}); */}
export default Glitch;