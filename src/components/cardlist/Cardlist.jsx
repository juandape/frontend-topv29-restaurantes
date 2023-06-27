const Cardlist = ({ products = [] }) => {
  return (
    <div className='cardlist'>
      {products.map((rest) => {
        // <Cardrest key={rest.id} rest={rest} />;
        return (
          <li key={rest.id}>{rest.name}</li>

        )
      })}
    </div>
  );
};

export default Cardlist;
