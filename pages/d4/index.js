// pages/index.js
import Head from 'next/head'
import { useRouter } from 'next/router'
import Row from '../components/row'
import { SlideFade, Box, Text, HStack, Stack, SimpleGrid, Grid, GridItem, Flex } from '@chakra-ui/react'

const carList = {0: "Porsche 991 GT3",
           1: "Mercedes AMG GT3",
           2: "Ferrari 488 GT3",
           3: "Audi R8 GT3 2015",
           4: "Lamborghini Huracan GT3",
           5: "McLaren 650s GT3",
           6: "Nissan GT-R Nismo GT3 2018",
           7: "BMW M6 GT3",
           8: "Bentley Continental GT3 2018",
           9: "Porsche 991 II GT3 Cup",
           10: "Nissan GT-R Nismo GT3 2015",
           11: "Bentley Continental GT3 2015",
           12: "Aston Martin Vantage V12 GT3",
           13: "Lamborghini Gallardo R-EX",
           14: "Emil Frey Jaguar G3",
           15: "Lexus RC F GT3",
           16: "Lamborghini Huracan Evo 2019",
           17: "Honda NSX GT3",
           18: "Lamborghini Huracan SuperTrofeo",
           19: "Audi R8 LMS Evo 2019",
           20: "Aston Martin Vantage V8 2019",
           21: "Honda NSX Evo 2019",
           22: "McLaren 720S GT3 Special",
           23: "Porsche 991 II GT3 R 2019",
           24: "Ferrari 488 GT3 Evo",
           25: "Mercedes AMG GT3 2020",
           30: "BMW M4 GT3 2022",
           31: "Audi R8 LMS Evo II 2022",
           50: "Alpine A110 GT4",
           51: "Aston Martin Vantage GT4",
           52: "Audi R8 LMS GT4",
           53: "BMW M4 GT4",
           54: "NaN",
           55: "Chevrolet Camaro GT4",
           56: "Ginetta G55 GT4",
           57: "KTM X-Bow GT4",
           58: "Maserati MC GT4",
           59: "McLaren 570S GT4",
           60: "Mercedes AMG GT4",
           61: "Porsche 718 Cayman GT4"
           }

export default function Home(props) {
  const driver_standings = props['Driver Standings']
  return (
    <Box height='1080px' border='1px solid #000'>
      <Head>
        <title>KindaCode.com</title>
      </Head>
      <Flex direction={'column'} wrap='wrap' height='1000px' width='1660px'>
      {driver_standings &&
        driver_standings.map((driver, i) => (
          <Row 
            driver={driver.driver} 
            key={i}
            team={driver.team}
            car={driver.car}
            points={driver.points}
            driverClass={driver.class}
          />
        ))
      }
      </Flex>
    </Box>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'


export async function getServerSideProps() {

  const filePath = path.join(process.cwd(), 'data/standings_d4.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}