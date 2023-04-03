import PropTypes from 'prop-types';

const Section = ({ children, title }) => {

  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
Section.protoTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};