import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../images/barana.png";
import creationsData from "../creations.json";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  featuredCard: {
    background: "white",
    padding: "16px",
    margin: "16px",
  },
  addFavoriteButton: {
    background: "tomato",
    color: "white",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [favorites, setFavorites] = useState({});
  const [featuredCreations, setFeaturedCreations] = useState(creationsData.filter((creation) => creation.featured));

  useEffect(() => {
    // Cargar favoritos desde localStorage al inicializar el componente
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Guardar favoritos en localStorage cuando cambian
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (title) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [title]: !prevFavorites[title],
    }));
  };

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <img src={avatar} alt="Barana's co." className={classes.avatar} />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Barana's co."]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Estudiantes de informática",
            "Frontend Developer",
            "Backend Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>

      <Grid container>
        {featuredCreations.map((creation, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className={classes.featuredCard}>
              <Typography variant="h6">{creation.title}</Typography>
              <Typography variant="body2">{creation.description}</Typography>
              <Typography variant="body2">Date: {creation.date}</Typography>
              <button
                className={classes.addFavoriteButton}
                onClick={() => toggleFavorite(creation.title)}
              >
                {favorites[creation.title] ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
