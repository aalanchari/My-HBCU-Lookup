// import
import { Avatar, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2'
import Bar from "../Components/Bar.tsx";
import { Link } from 'react-router-dom';

// function
function Home() {

  const hbcus = [
    {
    name: "Albany State University",
    slug: "albany-state-university",
    image: "public/Albany State.png",
    alt: "Alabama A&M University"
    },
    {
    name: "Alabama A&M University",
    slug: "alabama-a-and-m-university",
    image: "public/Alabama A&M.png",
    alt: "Albany State University"
    } ,
    {
    name: "Bowie State University",
    slug: "bowie-state-university",
    image: "public/Bowie State.png",
    alt: "Bowie State University"
    },
    {
    name: "Clark Atlanta University",
    slug: "clark-atlanta-university",
    image: "public/Clark Atlanta.png",
    alt: "Clark Atlanta University"
    },
    {
    name: "Howard University",
    slug: "howard-university",
    image: "public/Howard.png",
    alt: "Howard University"
    },
    {
    name: "Miles College",
    slug: "miles-college",
    image: "public/Miles.png",
    alt: "Miles College"
    },
    {
    name: "Mississippi Valley State University",
    slug: "mississippi-valley-state-university",
    image: "public/Mississippi Valley.png",
    alt: "Mississippi Valley State University"
    },
    {
    name: "Morehouse College",
    slug: "morehouse-college",
    image: "public/Morehouse.png",
    alt: "Morehouse College"
    },
    {
    name: "Morris Brown College",
    slug: "morris-brown-college",
    image: "public/Morris Brown.jpg",
    alt: "Morris Brown College"
    },
    {
    name: "Norfolk State University",
    slug: "norfolk-state-university",
    image: "public/Norfolk State.png",
    alt: "Norfolk State University"
    },
    {
    name: "North Carolina A&T State University",
    slug: "north-carolina-a-and-t-state-university",
    image: "public/North Carolina A&T.png",
    alt: "North Carolina A&T State University"
    },
    {
    name: "Prairie View A&M University",
    slug: "prairie-view-a-and-m-university",
    image: "public/Prairie View A&M University.png",
    alt: "Prairie View A&M University"
    },
    {
    name: "Spelman College",
    slug: "spelman-college",
    image: "public/Spelman.png",
    alt: "Spelman College"
    },
    {
    name: "Texas Southern University",
    slug: "texas-southern-university",
    image: "public/Texas Southern.png",
    alt: "Texas Southern University"
    },
    {
    name: "Tuskegee University",
    slug: "tuskegee-university",
    image: "public/Tuskegee.png",
    alt: "Tuskegee University"
    },
    {
    name: "Xavier University of Louisiana",
    slug: "xavier-university-of-louisiana",
    image: "public/Xavier.png",
    alt: "Xavier University of Louisiana"
    } 
  ];
  
  return(
    <> 
    <Bar></Bar>
    <Avatar src="public/Home Background.jpg" alt="HBCU LOOKUP" variant="square" sx={{width:"100%", height:"400px"}}></Avatar>
    
    {/* Grid */}
    <Grid container sx={{mt:"12px"}} spacing={2} columns={12}>
      {hbcus.map((hbcu) => (
        <Grid 
        key={hbcu.name} 
        gridColumn="span 3" 
        sx={{ aspectRatio: 1 / 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Link to={`/profile/${hbcu.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}>
          
  <Avatar
    variant="square"
    src={hbcu.image}
    alt={hbcu.name}
    sx={{
      width: "100%",
      height: 150,
      objectFit: "cover",
      borderRadius: 2,
    }}
  />
  <Typography variant="subtitle1" 
    sx={{ mt: 1, textAlign: "center", fontWeight: "bold" }}
  >
    {hbcu.name}
  </Typography>
</Link>
        </Grid>
      ))}
    </Grid>
    </> 
  )
  
}



//export
export default Home