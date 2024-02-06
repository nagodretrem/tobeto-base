import React, { useEffect } from "react";
import carService from "../../services/carService";

type Props = {};

const Homepage = (props: Props) => {
  useEffect(() => {
    carService.getAll().then((response) => {
      console.log(response);
    });
  }, []);

  return <div>Homepage</div>;
};

export default Homepage;
