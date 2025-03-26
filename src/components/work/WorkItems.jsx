import PropTypes from 'prop-types';

function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" width="500" height="500" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
        Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
  
    </div>
  );
}

WorkItems.propTypes = {
  item: PropTypes.shape({
    id:PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkItems;
