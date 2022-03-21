import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../utils/fetchData";
import styles from "./Rooms.module.css";
import PropTypes from "prop-types";

const Rooms = ({ id, capacityChildren, capacityAdults }) => {
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    fetchData(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`)
      .then((fetchedData) => {
        // console.log("Rooms data:", fetchedData.rooms);
        setFilteredRooms(
          fetchedData.rooms.filter(
            (room) =>
              Number(room.occupancy.maxAdults) >= Number(capacityAdults) &&
              Number(room.occupancy.maxChildren) >= Number(capacityChildren)
          )
        );
      })
      .catch((err) => console.log("err", err));
  }, [id, capacityChildren, capacityAdults]);

  return (
    <>
      {filteredRooms.map((room) => (
        <div key={room.id} className={styles.card}>
          <div className={styles.left}>
            <h4>{room.name}</h4>
            <p>Adults: {room.occupancy.maxAdults}</p>
            <p>Children: {room.occupancy.maxChildren}</p>
          </div>
          <p className={styles.right}>{room.longDescription}</p>
        </div>
      ))}
    </>
  );
};

Rooms.propTypes = {
  id: PropTypes.string.isRequired,
  capacityChildren: PropTypes.number.isRequired,
  capacityAdults: PropTypes.number.isRequired,
};

export default Rooms;
