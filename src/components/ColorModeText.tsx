import { useColorMode } from '../context/ColorModeContext'

export const ColorModeText: React.FC = () => {

  const { mode } = useColorMode()

  return (
    <p>現在のテーマ：{mode}</p>
  )
}