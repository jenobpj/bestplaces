import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
import Button from "../../shared/FormElements/Button";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the mose famous sky scrapers in the world",
    imageUrl:
      "https://images.pexels.com/photos/9758093/pexels-photo-9758093.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "20 W 34th st, New York,NY 1001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the mose famous sky scrapers in the world",
    imageUrl:
      "https://images.pexels.com/photos/9758093/pexels-photo-9758093.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "20 W 34th st, New York,NY 1001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList item={loadedPlaces} />;
};
export default UserPlaces;
