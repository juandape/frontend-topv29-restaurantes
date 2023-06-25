import './international.css';

function International() {
  return (
    <div className='container__international'>
      <select name='currency' id='currency' className='container__international--option'>
        <option value='USD'>USD</option>
        <option value='COP'>COP</option>
      </select>
      <select name='language' id='language' className='container__international--option'>
        <option value='ENG'>ENG</option>
        <option value='ESP'>ESP</option>
      </select>
    </div>
  );
}

export default International;
