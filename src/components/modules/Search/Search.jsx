import PropTypes from 'prop-types';

/**
 * 
 * @param {className} className
 * @param {type} type
 * @param {searchInput} searchInput
 * @returns 
 */

export const Search = ({ className, type = 'text', searchInput, placeholder = 'Search...' }) => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                onChange={searchInput}
            />
        </>
    )
};

Search.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    searchInput: PropTypes.func,
    placeholder: PropTypes.string,
}