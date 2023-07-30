import PropTypes from 'prop-types';

/**
 * 
 * @param {string} className
 * @param {string} type
 * @param {string} searchInput
 * @param {function} onPressEnter
 * @returns 
 */

export const SearchComponent = ({ className, type = 'text', searchInput, placeholder = 'Search...', onPressEnter }) => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                onChange={searchInput}
                onKeyDown={onPressEnter}
            />
        </>
    )
};

SearchComponent.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    searchInput: PropTypes.func,
    placeholder: PropTypes.string,
    onPressEnter: PropTypes.func
}