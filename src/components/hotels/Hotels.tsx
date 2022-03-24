import React, { useState } from "react";
import styles from "./Hotels.module.css";
import { FaStar } from "react-icons/fa";
import Rooms from "../rooms/Rooms";
import Slider from "../slider/Slider";
import { Colors, Hotel } from "../../model";
// import PropTypes from "prop-types";

interface Props {
  filteredData: Hotel[];
  stars: number[];
  colors: Colors;
  capacityChildren: number;
  capacityAdults: number;
}

const Hotels: React.FC<Props> = ({
  filteredData,
  stars,
  colors,
  capacityChildren,
  capacityAdults,
}) => {
  // const [renderHotel, setRenderHotel] = useState<boolean>(true);
 
  // console.log("renderHotel", renderHotel);
  return (
    <>
      {
        // renderHotel ?
         filteredData.length !== 0 &&
          filteredData.map((d) => (
            <section className={styles.card} key={d.id}>
              <div className={styles.header}>
                <div className={styles.info}>
                  <Slider images={d.images} id={d.id} />
                  <div className={styles.data}>
                    <h3>{d.name}</h3>
                    <p className={styles.articleAddress}>{d.address1}</p>
                    <p>{`${d.address2}` || ``}</p>
                  </div>
                </div>
                <div className={styles.stars}>
                  {stars.map((_, idx) => (
                    <FaStar
                      size={24}
                      key={idx}
                      color={d.starRating > idx ? colors.orange : colors.gray}
                    />
                  ))}
                </div>
              </div>

              <Rooms
                id={d.id}
                capacityAdults={capacityAdults}
                capacityChildren={capacityChildren}
                // renderHotel={renderHotel}
                // setRenderHotel={setRenderHotel}
              />
            </section>
          ))
        // : null
        }
    </>
  );
};

// Hotels.propTypes = {
//   filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
//   stars: PropTypes.arrayOf(PropTypes.number).isRequired,
//   colors: PropTypes.objectOf(PropTypes.string).isRequired,
//   capacityChildren: PropTypes.number.isRequired,
//   capacityAdults: PropTypes.number.isRequired,
// };

export default Hotels;
