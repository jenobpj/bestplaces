import { useParams } from "react-router-dom";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/Validators";
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
const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const IdentifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);
  if (!IdentifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={() => {}}
        value={IdentifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Title"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description (min 5 characters)"
        onInput={() => {}}
        value={IdentifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};
export default UpdatePlace;
