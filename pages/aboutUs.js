import { LogoDev } from "@mui/icons-material";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Demo from "/components/indexDemo/Demo"
import React from 'react';
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Chip } from "@mui/material";
import Lottie from 'react-lottie'
import exampleAnimationData from '/public/lotties/animacija';
import trophy from '/public/lotties/trophy';
import specialist from '/public/lotties/specialist';
import information from '/public/lotties/information';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { positions } from '@mui/system';
import { BottomNavigation } from "@mui/material";
import { Button } from "@mui/material";
import { Divider } from "@mui/material";




export default function Learn() {


  return <>

<Stack
      direction={{md:'row', xs:'column'}}
      justifyContent={{md:'flex-start', xs:'center'}}
      alignItems="center"
      sx={{mt:10}}
      ml={{xs:1,md:15}}
      >
        <Box>
         <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>Who? Why? When? Where?</Typography>
        </Box>
        
      </Stack>

      <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent={{md:'flex-start', xs:'center'}}
      alignItems="center"
      sx={{mt:15}}
      ml={{xs:1,md:15}}
      >
        <Box>
          <Typography variant="h4" maxWidth={{md:1050}} sx={{color:"background.contrastColor"}}>We are a humble team of 3 software engineering students based in Zagreb, Croatia.</Typography>
          <Typography variant="h4" mt={{md:7, xs:5}} maxWidth={{md:1300}} sx={{color:"background.contrastColor"}}> Everything started back in March, 2022 when we saw an Instagram post about this college hosted event called "TVZ Mc2", Croatia's biggest Mobile, Web and IoT solutions competition.</Typography>
          <Typography variant="h4" mt={{md:3, xs:5}} maxWidth={{md:1300}} sx={{color:"background.contrastColor"}}>Little did we know it would soon become an inception of a great partnership and even greater friendship.</Typography>
          <Typography variant="h4" mt={{md:3, xs:3}} sx={{color:"background.contrastColor"}}>We named ourselves after the goal of our idea.</Typography>
        </Box>
        
      </Stack>

      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent={{md:'flex-start', xs:'center'}}
      alignItems="center"
      ml={{xs:1,md:15}}
      mt={{xs:5, md:30}}
      >
        <Box>
        <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>Team Vision</Typography>
        </Box>
        
      </Stack>

     


      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent={{md:'flex-start', xs:'center'}}
      alignItems="center"
      ml={{xs:1,md:18}}
      mt={{xs:5, md:8}}
      >
        <Box>
        <Image src="/images/pp.png" width="200" height="200" title="Welcome to Community!"></Image>
        </Box>
        
        <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center">

              <Box>
              <Typography variant="h4" mt={{md:-2, xs:5}} ml={{md:10, xs:5}} sx={{color:"background.contrastColor"}}>Petar Pržić</Typography>
              <Typography variant="h5" mt={{md:3, xs:5}} ml={{md:10}} sx={{color:"background.contrastColor"}}>Back-End Development</Typography>
              </Box>

        </Stack>

        <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
        mt={{md:1,xs:5}}
        ml={{md:80}}>

        <Box>
          <a href="https://www.linkedin.com/in/petar-przic-1b682817a/"><Image src="/images/linkedIN.png" width="30" height="30" title="LinkedIN"></Image></a>
        </Box>
        <Box>
          <a href="https://github.com/pero020"><Image src="/images/git.png" width="30" height="30" title="GitHub"></Image></a>
        </Box>
        <Box>
          <Image src="/images/mail.png" width="43" height="30" title="petar.przic1@gmail.com"></Image>
        </Box>

        </Stack>

      </Stack>


      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent={{md:'flex-start', xs:'center'}}
      alignItems="center"
      ml={{xs:1,md:18}}
      mt={{xs:5, md:8}}
      >
        <Box>
        <Image src="/images/rr.png" width="200" height="200" title="Welcome to Community!"></Image>
        </Box>
        
        <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center">

              <Box>
              <Typography variant="h4" mt={{md:-2, xs:5}} ml={{md:10, xs:5}} sx={{color:"background.contrastColor"}}>Renato Rak</Typography>
              <Typography variant="h5" mt={{md:3, xs:5}} ml={{md:10}} sx={{color:"background.contrastColor"}}>Front-End Development</Typography>
              </Box>

        </Stack>

        <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
        mt={{md:1,xs:5}}
        ml={{md:80}}>

        <Box>
          <a href="https://www.linkedin.com/in/renato-rak-bb8895237/"><Image src="/images/linkedIN.png" width="30" height="30" title="LinkedIN"></Image></a>
        </Box>
        <Box>
          <a href="https://github.com/RennSter20"><Image src="/images/git.png" width="30" height="30" title="GitHub"></Image></a>
        </Box>
        <Box>
          <Image src="/images/mail.png" width="43" height="30" title="renatorak20@gmail.com"></Image>
        </Box>

        </Stack>

      </Stack>

      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent={{md:'flex-start', xs:'center'}}
      alignItems="center"
      ml={{xs:1,md:18}}
      mt={{xs:5, md:8}}
      >
        <Box>
        <Image src="/images/ik.png" width="200" height="200" title="Welcome to Community!"></Image>
        </Box>
        
        <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center">

              <Box>
              <Typography variant="h4" mt={{md:-2, xs:5}} ml={{md:10, xs:9}} sx={{color:"background.contrastColor"}}>Ivan Kulić</Typography>
              <Typography variant="h5" mt={{md:3, xs:5}} ml={{md:10}} sx={{color:"background.contrastColor"}}>Design, Marketing, UI & UX</Typography>
              </Box>

        </Stack>

        <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
        mt={{md:1,xs:5}}
        ml={{md:76}}>

        <Box>
          <a href="https://www.linkedin.com/in/ivan-kuli%C4%87-37b27a22a/"><Image src="/images/linkedIN.png" width="30" height="30" title="LinkedIN"></Image></a>
        </Box>
        <Box>
          <a href="https://github.com/1vankulic"><Image src="/images/git.png" width="30" height="30" title="Welcome to Community!"></Image></a>
        </Box>
        <Box>
          <Image src="/images/mail.png" width="43" height="30" title="kulicivan543@gmail.com"></Image>
        </Box>

        </Stack>

      </Stack>
  </>
};