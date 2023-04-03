import React from 'react';
import { BtnFeed } from './feedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        <li>
          {options.map(index => (
            <BtnFeed
              item={index}
              key={index}
              type="button"
              onClick={() => onLeaveFeedback(index)}
            >
              {index}
            </BtnFeed>
          ))}
        </li>
      </ul>
    </>
  );
};

export default FeedbackOptions;
FeedbackOptions.prorTypes = {
  options: PropTypes.arrayOf({
    item: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
