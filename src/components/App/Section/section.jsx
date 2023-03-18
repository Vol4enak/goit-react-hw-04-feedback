

const Section = ({ children, title }) => {
    // console.log(titleFeedback);
    console.log(children);
    return <section>
        <h2>{title}</h2>
        {children}
    </section>;
};
export default Section;