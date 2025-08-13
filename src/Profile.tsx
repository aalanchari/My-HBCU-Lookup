import React from "react";
import { useParams } from "react-router-dom";
import { hbcus, HBCU } from "./Data/hbcus";
import Bar from "./Components/Bar";
import { Avatar, Box, Typography } from "@mui/material";

const Profile = () => {
  const { profileID } = useParams();
  const school = hbcus.find((h) => h.slug === profileID);

  if (!school) {
    return (
      <div>
        <h1>School Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{school.name}</h1>
      <img src={school.image} alt={school.name} />
      <p>{school.overview}</p>
      {school.website && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          <a href={school.website} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: "none" }}>
            Visit Official Website
          </a>
        </Typography>
      )}
    </div>
  );
};

export default Profile;
// This code defines a Profile component that displays the profile of a specific HBCU (Historically Black College or University).
// It uses the `useParams` hook from React Router to get the `profileID` from the URL.
// It then finds the corresponding school in the `hbcus` array.
// If the school is found, it displays the school's image, name, and overview.
// If the school is not found, it displays a message indicating that the school was not found