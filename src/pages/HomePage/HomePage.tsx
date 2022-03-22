import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchData from "../../utils/fetchData";
import styles from "./HomePage.module.css";
import { FaStar } from "react-icons/fa";
import Hotels from "../../components/hotels/Hotels";
import Counter from "../../components/counter/Counter";

type Colors = {
  orange: string;
  gray: string;
};

const colors: Colors = {
  orange: "#FFBA5A",
  gray: "A9A9A9",
};

interface Hotel {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  starRating: string;
  address1: string;
  address2: string;
}

const HomePage: React.FC = () => {
  // const HomePage = () => {
  const [data, setData] = useState <[] | Hotel[]>([]);
  const [filteredData, setFilteredData] = useState<[] | Hotel[]>([]);
  const [capacityAdults, setCapacityAdults] = useState<number>(2);
  const [capacityChildren, setCapacityChildren] = useState<number>(0);
  // const [capacity, setCapacity] = useState({
  //   adults: 1,
  //   children: 0,
  // });
  const stars: number[] = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const URL = `https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`;

  const handleClick = (value: number) => {
    setCurrentValue(value);
    setFilteredData(data.filter((d) => Number(d.starRating) >= value));
  };
  const handleMouseOver = (value: number) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  useEffect(() => {
    fetchData(URL)
      .then((fetchedData) => {
        // console.log("useEffect fetchData data:", fetchedData);
        setData(fetchedData);
        setFilteredData(fetchedData);
      })
      .catch((err) => console.log("err ", err));
  }, [URL]);

  return (
    <div className={styles.container}>
      <section>
        {filteredData.length !== 0 && (
          <img
            className={styles.heroImg}
            src={filteredData[0].images[0].url}
            alt="view from one of our hotels"
          />
        )}
      </section>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <div className={styles.starRating}>
            {stars.map((_, idx) => (
              <FaStar
                key={idx}
                size={24}
                color={
                  (hoverValue || currentValue) > idx
                    ? colors.orange
                    : colors.gray
                }
                onClick={() => handleClick(idx + 1)}
                onMouseOver={() => handleMouseOver(idx + 1)}
                onMouseLeave={() => handleMouseLeave()}
              />
            ))}
          </div>
          <Counter
            // className={styles.adults}
            title="Adults"
            value={capacityAdults}
            onClick={setCapacityAdults}
          />
          <Counter
            title="Children"
            value={capacityChildren}
            onClick={setCapacityChildren}
          />
        </div>
        <Hotels
          filteredData={filteredData}
          stars={stars}
          colors={colors}
          capacityAdults={capacityAdults}
          capacityChildren={capacityChildren}
        />
      </div>
    </div>
  );
};

export default HomePage;
