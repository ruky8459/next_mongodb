import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className='text-red-400 hover:corsor-pointer hover:text-red-200'
      />
  )
}

export default DeleteBlock