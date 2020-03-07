import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './TableDetail.scss';
const queryString = require('query-string');

export default function TableDetail() {

  const [table, setTable] = useState();

  useEffect(() => {
    //componentDidMount
    let params = null;

    if(window && window.location && window.location.hash){
      params = window.location.hash.split('?')[1];
    }
    if(params){
      const parsed = queryString.parse(params);
      setTable(parsed);
    }
  }, []);


  return (
    <div className={styles.container} data-tid="container">
      <h2>{table && (table.name + " " + table.no)}</h2>
      <Link to={routes.HOME}>to Home</Link>
    </div>
  );
}
