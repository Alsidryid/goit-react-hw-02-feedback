import PropTypes from 'prop-types';

export function Notification({message}){
    return(
        <p>
          {message}  
        </p>
    )
}

Notification.propTyypes = {
    message: PropTypes.string,
}