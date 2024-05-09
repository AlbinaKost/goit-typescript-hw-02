import css from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.container}>
      render(
      <Circles
        height="80"
        width="80"
        color="#646cff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      )
    </div>
  );
};

export default Loader;