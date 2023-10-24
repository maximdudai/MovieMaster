import propTypes from 'prop-types'

import { Navigation } from '../../Components/Navigation/Navigation';

export const Seach = ({ seachResponse }) => {
  return (
    <>
      <Navigation />
      <main>
        {seachResponse}
      </main>
    </>
  )
}

Seach.propTypes = {
  seachResponse: propTypes.object
}