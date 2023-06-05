import Cardrest from '../cardrest/Cardrest';

const Cardlist = ({ data }) => {
  return (
    <div className='cardlist'>
      {data.map((rest, index) => {
        <Cardrest key={index} {...rest} />;
      })}
    </div>
  );
};

export default Cardlist;
