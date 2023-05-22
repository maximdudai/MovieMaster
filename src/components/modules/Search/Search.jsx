import PropTypes from 'prop-types';

/**
 * 
 * @param {className} className
 * @param {type} type
 * @param {searchInput} searchInput
 * @returns 
 */

export const Search = ({ className, type, searchInput }) => {
    return (
        <>
            <input
                className={className}
                type={type}
                placeholder="Search"
                onChange={searchInput}
            />
        </>
    )
};

Search.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    searchInput: PropTypes.func,
}