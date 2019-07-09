/**
 * Transitions are not fun with Gatsby - this basic example is directly from
 * the Gatsby starter example:
 * https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions
 */

import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import PropTypes from 'prop-types';

const timeout = 300;
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease, top ${timeout}ms ease`,
    position: 'relative',
    opacity: 1,
    top: '0',
  },
  exiting: {
    transition: `opacity ${timeout}ms ease, top ${timeout}ms ease`,
    position: 'relative',
    top: '30px',
    opacity: 0,
  },
};

class Transition extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
  };
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          // Location isn't available at buildtime
          key={location ? location.pathname : Math.random().toString()}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
