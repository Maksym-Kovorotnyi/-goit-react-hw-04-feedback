import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({onClick}) => (
    <>
        <div className={css.container}>
            <button className={css.btn }type="button" name='good' onClick={onClick} >Good</button>
    <button className={css.btn } type="button" name='neutral' onClick={onClick}>Neutral</button>
    <button className={css.btn } type="button" name='bad' onClick={onClick}>Bad</button>
    </div>
    </>
)

FeedbackOptions.propTypes = {
  onClick: PropTypes.func
};