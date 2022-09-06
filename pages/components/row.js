import { Box, Text, HStack, Flex } from '@chakra-ui/react'

export default function Row(props) {
  const rank = props.driverClass != 'Unrated' ? props.driverClass : 'red'
  return (
    <HStack key={props.int} bgColor='rgba(0,0,0,.9)' p={'2'} rounded='lg' maxW='580px' mb='1' mr='1'>
        <Box 
          bgColor="#FFF" 
          width="40px" 
          pt='2' 
          pb='2' 
          textAlign={'center'}
          roundedBottomRight='lg'
        >
          <Text fontFamily={'GrandNational'} fontSize={'lg'} fontWeight='bold'>{props.int}</Text>
        </Box>
        <Box flex='1' color='#fff' borderLeft='2px solid' borderColor={rank} pl='5'>
          <Text fontSize={'md'} fontWeight={'bold'}>{props.driver}</Text>
          <Text noOfLines={1} fontSize={'sm'}>{props.team} <Text fontSize={'sm'} as='span' color='grey'>{props.car}</Text></Text>
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