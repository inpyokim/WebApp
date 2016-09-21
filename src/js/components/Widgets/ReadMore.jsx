import React, { Component, PropTypes } from "react";
import TextTruncate from "react-text-truncate";

export default class ReadMore extends Component {
  static propTypes = {
    text_to_display: PropTypes.node.isRequired,
    link_text: PropTypes.node,
    collapse_text: PropTypes.node,
    num_of_lines: PropTypes.number
  };

    constructor (...args) {
      super(...args);

      this.state = {
        readMore: true
      };

      this.toggleLines = this.toggleLines.bind(this);
    }

    toggleLines (event) {
        event.preventDefault();

        this.setState({
            readMore: !this.state.readMore
        });
    }

    render () {
        let { text_to_display, link_text, num_of_lines, collapse_text } = this.props;
        if (num_of_lines === undefined) {
          num_of_lines = 3;
        }
        if (link_text === undefined) {
          link_text = "More";
        }
        if (collapse_text === undefined) {
          collapse_text = " ...Less";
        }

        if (this.state.readMore) {
          return <span>
            <TextTruncate
                  line={num_of_lines}
                  truncateText="..."
                  text={text_to_display}
                  textTruncateChild={<a href="#" onClick={this.toggleLines}>{link_text}</a>}
              />
          </span>;
        } else {
          return <span>{text_to_display}<a href="#" onClick={this.toggleLines}>{collapse_text}</a></span>;
        }
    }
}