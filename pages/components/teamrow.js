import { Box, Text, HStack } from '@chakra-ui/react'

export default function TeamRow(props) {
  return (
    <HStack key={props.int} bgColor='#0A1123' p={'2'} rounded='lg' maxW='580px' mb='1' mr='1'>
      <Box 
        bgColor="#FFF" 
        width="40px" 
        pt='2' 
        pb='2' 
        textAlign={'center'}
        roundedBottomRight='lg'
      >
        <Text fontSize={'lg'} fontWeight='bold'>{props.int}</Text>
      </Box>
      <Box flex='1' color='#fff' borderLeft='2px solid' pl='5'>
        <Text fontWeight={'bold'}>{props.teamName}</Text>
      </Box>
      <Box
        pr='2' 
        textAlign={'right'}
        rounded='md' 
        color='#F6CE5E'>
          <Text fontSize={'lg'} fontWeight='bold'>{props.points}</Text>
      </Box>
    </HStack>
  )
}
