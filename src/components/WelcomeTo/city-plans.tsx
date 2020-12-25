/** @jsx jsx */
import { jsx } from 'theme-ui';
import missionL1 from '../../assets/svg/welcometo/city-plans/mission-l1-1.svg';
import missionL2 from '../../assets/svg/welcometo/city-plans/mission-l1-1.svg';
import missionL3 from '../../assets/svg/welcometo/city-plans/mission-l1-1.svg';

const CityPlans = () => {
  const cityPlansCss = {
    width: '80%',
    height: '90%',
    justifySelf: 'center',
    alignSelf: 'center',
  };
  return (
    <div
      className="city-plans"
      sx={{
        gridArea: 'city-plans',
        display: 'grid',
        gridTemplateColumns: '33% 33% 33%',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <img sx={cityPlansCss} src={missionL1} alt="mission Level 1" />
      <img sx={cityPlansCss} src={missionL2} alt="mission Level 2" />
      <img sx={cityPlansCss} src={missionL3} alt="mission Level 3" />
    </div>
  );
};

export default CityPlans;
