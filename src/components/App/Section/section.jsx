import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
    console.log(children);
    console.log(title)
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
Section.protoTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};