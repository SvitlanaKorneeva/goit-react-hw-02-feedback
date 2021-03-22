import React from 'react'
import s from './Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = ({title, stats}) => {
    return (<><section className ="statistics">
  <h2 className ="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className ="label">.docx</span>
      <span className ="percentage">4%</span>
    </li>
    <li className ="item">
      <span className ="label">.mp3</span>
      <span className ="percentage">14%</span>
    </li>
    <li clasName ="item">
      <span clasName ="label">.pdf</span>
      <span clasName ="percentage">41%</span>
    </li>
    <li className ="item">
      <span className ="label">.mp4</span>
      <span className ="percentage">12%</span>
    </li>
  </ul>
</section></>)
}

export default Statistics;
Statistics.defaultProps = {
    title: "string"
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired
        
    }))
}

