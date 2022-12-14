//Assenst
import ic_cake from "../assenst/icons/ic_cake.svg";
import ic_fast_food from "../assenst/icons/ic_fast_food.svg";
import ic_kids from "../assenst/icons/ic_kids.svg";
import ic_main from "../assenst/icons/ic_main.svg";
import ic_soup from "../assenst/icons/ic_soup.svg";
import ic_vegetarian from "../assenst/icons/ic_vegetarian.svg";
import ic_home from "../assenst/icons/ic_home.svg";

const getApiKey = "apiKey=fa85de31b05345ce861061c6ca0246a4";

export const menu = [
  {
    name: "Vegetarianos",
    image: <img className="home__menu-img" src={ic_vegetarian} />,
    shortname: "Vegetarianos",
    onclick: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}&tags=vegetarian`,
  },
  {
    name: "Principales",
    image: <img className="home__menu-img" src={ic_main} />,
    shortname: "Platos Principales",
    onclick: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}&type=maincourse`,
  },
  {
    name: "Tortas",
    image: <img className="home__menu-img" src={ic_cake} />,
    shortname: "Tortas",
    onclick: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}&query=cakes`,
  },
  {
    name: "Rapida",
    image: <img className="home__menu-img" src={ic_fast_food} />,
    shortname: "Comida rapida",
    onclick: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}&query=fastfood`,
  },
  {
    name: "Ninos",
    image: <img className="home__menu-img" src={ic_kids} />,
    shortname: "Menu Ninos",
    onclick: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}&query=kids`,
  },
  {
    name: "Sopas",
    image: <img className="home__menu-img" src={ic_soup} />,
    shortname: "Sopas",
    onclick: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}&type=soup`,
  },
];
export const home = {
  name: "Home",
  url: `https://api.spoonacular.com/recipes/complexSearch?${getApiKey}`,
  image: <img className="home__menu-img" src={ic_home} />,
};
