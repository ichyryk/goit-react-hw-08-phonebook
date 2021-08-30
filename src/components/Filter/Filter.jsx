import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/contacts';

const Filter = () => {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        required
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
