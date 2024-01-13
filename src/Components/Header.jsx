import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    VStack,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
        <Button colorScheme='purple' 
        pos={'fixed'}
        top={4}
        left={4}
        ref={btnRef} onClick={onOpen}>
        <BiMenuAltLeft></BiMenuAltLeft>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={'center'}>Video Hub</DrawerHeader>

          <DrawerBody>
           <VStack>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/'}>
                Home
                </Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos'}>
                Videos
                </Link>
            </Button>
            <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/videos?category=free'}>
                Free Videos
                </Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>
                Upload Video
                </Link>
            </Button>
           </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme='purple'   >
              <Link to={'/login'}>
              Log In
              </Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant='outline'  >
              <Link to={'/signUp'}>
              Sign Up
              </Link>
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
    </>
  )
}
