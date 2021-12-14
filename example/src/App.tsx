import React from 'react'

import {Button} from '@familyboat/react-button'
import '@familyboat/react-button/dist/index.css'

const App = () => {
  return (
    <>
      <Button
        className='primary'
        isLoading
      >
        button one
      </Button>
    </>
  )
}

export default App
