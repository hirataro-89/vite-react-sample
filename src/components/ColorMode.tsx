import { useColorMode } from '../context/ColorModeContext'
import { ColorModeText } from './ColorModeText'

export const ColorMode: React.FC = () => {

  const { mode, toggleMode } = useColorMode()

  return (
    <div className="color-mode__buttons">
      <button onClick={toggleMode}>{mode}</button>
      <ColorModeText />
    </div>
  )
}