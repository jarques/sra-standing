// pages/index.js
import Head from 'next/head'
import { Link, Box, Text, HStack, Stack, Center } from '@chakra-ui/react'

export default function Home(props) {
  const driver_standings = props['Driver Standings']
  return (
    <Box height='1080px' border='1px solid #000'>
      <Head>
        <title>SRA - Standings</title>
      </Head>
      <Center>
      <Stack spacing='10' mt='10'>
        <HStack spacing='1'>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d1'>D1 Driver Standings</Link>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d1/team'>D1 Team Standings</Link>
        </HStack>
        <HStack spacing='1'>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d2'>D2 Driver Standings</Link>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d2/team'>D2 Team Standings</Link>
        </HStack>
        <HStack spacing='1'>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d3'>D3 Driver Standings</Link>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d3/team'>D3 Team Standings</Link>
        </HStack>
        <HStack spacing='1'>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d4'>D4 Driver Standings</Link>
        <Link rounded='md' p='3' bgColor={'#FFF'} href='/d4/team'>D4 Team Standings</Link>
        </HStack>
      </Stack>
      </Center>
    </Box>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'


export async function getServerSideProps() {

  const filePath = path.join(process.cwd(), 'data/standings_d1.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}