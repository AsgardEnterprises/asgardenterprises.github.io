import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import style from './Layout.scss';

class Layout extends Component {
  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
    };
  }

  componentWillMount() {
    this.removeCss = this.props.context.insertCss(style);
  }

  componentWillUnmount() {
    setTimeout(this.removeCss, 0);
  }

  render() {
    return (
      <div className="Layout">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
