import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Room } from "../../model";
import fetchData from "../../utils/fetchData";
import styles from "./Rooms.module.css";
// import PropTypes from "prop-types";

interface Props {
  id: string;
  capacityChildren: number;
  capacityAdults: number;
  // renderHotel: boolean;
  // setRenderHotel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Rooms: React.FC<Props> = ({
  id,
  capacityChildren,
  capacityAdults,
  // renderHotel,
  // setRenderHotel,
}) => {
  
 const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
 
  // 
  useEffect(() => {
    fetchData(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`)
      .then((fetchedData) => {
        // console.log("Rooms data:", fetchedData.rooms);
        setFilteredRooms(
          fetchedData.rooms.filter(
            (room: Room) =>
              Number(room.occupancy.maxAdults) >= Number(capacityAdults) &&
              Number(room.occupancy.maxChildren) >= Number(capacityChildren)
          )
        );

        // execute(fetchedData);

        // renderHotel !==
        //   (fetchedData.rooms.filter(
        //     (room: Room) =>
        //       Number(room.occupancy.maxAdults) >= Number(capacityAdults) &&
        //       Number(room.occupancy.maxChildren) >= Number(capacityChildren)
        //   ).length > 0
        //     ? true
        //     : false) &&
        //   setRenderHotel(
        //     fetchedData.rooms.filter(
        //       (room: Room) =>
        //         Number(room.occupancy.maxAdults) >= Number(capacityAdults) &&
        //         Number(room.occupancy.maxChildren) >= Number(capacityChildren)
        //     ).length > 0
        //       ? true
        //       : false
        //   );
      })
      .catch((err) => console.log("err", err));
  }, [
    id,
    capacityChildren,
    capacityAdults,
    setFilteredRooms,
    // setRenderHotel,
    // renderHotel,
  ]);

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

// Rooms.propTypes = {
//   id: PropTypes.string.isRequired,
//   capacityChildren: PropTypes.number.isRequired,
//   capacityAdults: PropTypes.number.isRequired,
// };

export default Rooms;
