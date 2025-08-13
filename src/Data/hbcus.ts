// src/data/hbcus.ts
export interface HBCU {
  name: string;
  slug: string;
  image: string;
  overview: string;
  website: string; // Optional property for the website
}

export const hbcus: HBCU[] = [
  {
    name: "Morehouse College",
    slug: "morehouse-college",
    image: "/Morehouse.png",
    overview:
      "Morehouse College is a private, historically black men's liberal arts college in Atlanta, Georgia.",
    website: "https://morehouse.edu",
  },
  {
    name: "Spelman College",
    slug: "spelman-college",
    image: "/Spelman.png",
    overview:
      "Spelman College is a private, historically black liberal arts college for women in Atlanta, Georgia.",
    website: "https://spelman.edu",
  },
  {
    name: "Alabama A&M University",
    slug: "alabama-a-and-m-university",
    image: "/Alabama A&M.png",
    overview:
      "Alabama A&M University is a public, historically black land-grant university located in Normal, Alabama.",
    website: "https://www.aamu.edu",
  },
  {
    name: "Albany State University",
    slug: "albany-state-university",
    image: "/Albany State.png",
    overview:
      "Albany State University is a public historically black university in Albany, Georgia, and part of the University System of Georgia.",
    website: "https://www.asurams.edu",
  },
  {
    name: "Bowie State University",
    slug: "bowie-state-university",
    image: "/Bowie State.png",
    overview:
      "Bowie State University is Maryland’s oldest historically black university, offering a wide range of undergraduate and graduate programs.",
    website: "https://bowiestate.edu",
  },
  {
    name: "Clark Atlanta University",
    slug: "clark-atlanta-university",
    image: "/Clark Atlanta.png",
    overview:
      "Clark Atlanta University is a private, Methodist, historically black research university in Atlanta, Georgia.",
    website: "https://cau.edu",
  },
  {
    name: "Howard University",
    slug: "howard-university",
    image: "/Howard.png",
    overview:
      "Howard University is a private, federally chartered historically black university in Washington, D.C.",
    website: "https://howard.edu",
  },
  {
    name: "Miles College",
    slug: "miles-college",
    image: "/Miles.png",
    overview:
      "Miles College is a private historically black liberal arts college in Fairfield, Alabama.",
    website: "https://miles.edu",
  },
  {
    name: "Mississippi Valley State University",
    slug: "mississippi-valley-state-university",
    image: "/Mississippi Valley.png",
    overview:
      "Mississippi Valley State University is a public, historically black university located in Itta Bena, Mississippi.",
    website: "https://www.mvsu.edu",
  },
  {
    name: "Morris Brown College",
    slug: "morris-brown-college",
    image: "/Morris Brown.jpg",
    overview:
      "Morris Brown College is a private, historically black liberal arts college in Atlanta, Georgia, known for its comeback and resilience.",
    website: "https://morrisbrown.edu",
  },
  {
    name: "Norfolk State University",
    slug: "norfolk-state-university",
    image: "/Norfolk State.png",
    overview:
      "Norfolk State University is a public, historically black university in Norfolk, Virginia.",
    website: "https://www.nsu.edu",
  },
  {
    name: "North Carolina A&T State University",
    slug: "north-carolina-a-and-t-state-university",
    image: "/North Carolina A&T.png",
    overview:
      "North Carolina A&T State University is the largest HBCU in the U.S., known for its engineering, agriculture, and business programs.",
    website: "https://ncat.edu",
  },
  {
    name: "Prairie View A&M University",
    slug: "prairie-view-a-and-m-university",
    image: "/Prairie View A&M University.png",
    overview:
      "Prairie View A&M University is a public, historically black land-grant university in Prairie View, Texas.",
    website: "https://www.pvamu.edu",
  },
  {
    name: "Texas Southern University",
    slug: "texas-southern-university",
    image: "/Texas Southern.png",
    overview:
      "Texas Southern University is a public historically black university in Houston, Texas, known for its Thurgood Marshall School of Law.",
    website: "https://www.tsu.edu",
  },
  {
    name: "Tuskegee University",
    slug: "tuskegee-university",
    image: "/Tuskegee.png",
    overview:
      "Tuskegee University is a private HBCU in Tuskegee, Alabama, known for its engineering programs and history with Booker T. Washington.",
    website: "https://www.tuskegee.edu",
  },
  {
    name: "Xavier University of Louisiana",
    slug: "xavier-university-of-louisiana",
    image: "/Xavier.png",
    overview:
      "Xavier University of Louisiana is a private Catholic HBCU in New Orleans, renowned for producing Black medical school graduates.",
    website: "https://www.xula.edu",
  },
];
