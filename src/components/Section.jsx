import PropTypes from 'prop-types';

export default function Section({ title }) {
  return <div>{title && <h2>{title}</h2>}</div>;
}


Section.propTypes = {
    title: PropTypes.string
}