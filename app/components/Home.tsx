import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.scss';

export default function Home() {
  let tables = [];
  tables.push({id: 1, name:"Masa", no:"1", bill:"55"});
  tables.push({id: 2, name:"Masa", no:"2", bill:"65"});
  tables.push({id: 3, name:"Masa", no:"3", bill:"75"});
  tables.push({id: 4, name:"Masa", no:"4", bill:"85"});
  tables.push({id: 5, name:"Masa", no:"5", bill:"55"});
  tables.push({id: 6, name:"Masa", no:"6", bill:"65"});
  tables.push({id: 7, name:"Masa", no:"7", bill:"75"});
  tables.push({id: 8, name:"Masa", no:"8", bill:"85"});
  tables.push({id: 9, name:"Masa", no:"9", bill:"55"});
  tables.push({id: 10, name:"Masa", no:"10", bill:"65"});
  tables.push({id: 11, name:"Oyun Masa", no:"1", bill:"75"});
  tables.push({id: 12, name:"Oyun Masa", no:"2", bill:"85"});


  useEffect(() => {
    console.log("componentDidMount2");
  }, []);
  function onClickEx() {
    console.log("Clicked!");
  }
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>

      <a onClick={() => {onClickEx()}}>CLICK HERE</a>
      <br></br>
      { tables.map(function (prop, key) {
        return (
          <Link to={routes.TABLE_DETAIL + "?id=" + prop.id + "&name=" + prop.name + "&no=" + prop.no} >
            <div key={key} className={styles["cafe-table"]}>
              <span className={styles["name"]}>{prop.name + " " + prop.no}</span>
              <span className={styles["total-bill"]}>Total : {prop.bill}</span>
            </div>
          </Link>
        );
      })

      }
    </div>
  );
}
