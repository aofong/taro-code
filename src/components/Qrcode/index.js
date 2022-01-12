import Taro, { useMemo } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { Image } from '@tarojs/components'
import { createQrCodeImg } from '../../utils/qrcode'

function QRCode({
  text,
  size,
  scale,
  typeNumber,
  errorCorrectLevel,
  foregroundColor,
  backgroundColor,
}) {
  console.log(123, 123, 12312123)
  const image = useMemo(() => {
    const options = {
      errorCorrectLevel,
      typeNumber,
      size: size * scale,
      foregroundColor,
      backgroundColor,
    }
    return createQrCodeImg(text, options)
  }, [
    text,
    scale,
    size,
    errorCorrectLevel,
    typeNumber,
    foregroundColor,
    backgroundColor,
  ])
  const style = { width: size + 'px', height: size + 'px' }
  return <Image style={style} src={image} />
}

QRCode.defaultProps = {
  text: '',
  size: 100,
  scale: 4,
  errorCorrectLevel: 'M',
  typeNumber: 2,
  foregroundColor: '#000000',
  backgroundColor: '#ffffff',
}

QRCode.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  scale: PropTypes.number,
  errorCorrectLevel: PropTypes.string,
  typeNumber: PropTypes.number,
  foregroundColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default QRCode
