import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'; // if lat is more than 0 then summer, then winter
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const text =
    season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!';

  const icon =
    season === 'winter' ? 'snowflake' : 'sun';

  console.log('props.lat: ' + props.lat);
  console.log('season: ' + season);
  console.log('text: ' + text);

  //return <div>{season ==='winter' ? 'Burr, it is chilly' : 'Lets hit the beach!'}</div>;
  
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );


};

export default SeasonDisplay;
