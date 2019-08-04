import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchValue: '',
      textareaValue: '',
    };
    this.getTextareaValue = this.getTextareaValue.bind(this);
    this.getInputSearchValue = this.getInputSearchValue.bind(this);
  }

  getInputSearchValue(e) {
    this.setState({ inputSearchValue: e.target.value });
  }

  getTextareaValue(e) {
    this.setState({ textareaValue: e.target.value });
  }

  getTextDivValue() {
    const { inputSearchValue, textareaValue } = this.state;
    if (textareaValue) {
      if (inputSearchValue.trim()) {
        const regExp = new RegExp(inputSearchValue, 'gi');
        const textDivValue = textareaValue.replace(
          regExp,
          match => `<span class='coincidence'>${match}</span>`,
        );
        return textDivValue;
      }
      return textareaValue;
    }
    return "<span class='text_div_placeholder'>Matches</span>";
  }

  render() {
    const { inputSearchValue, textareaValue } = this.state;
    return (
      <div id="app">
        <h1 id="logo">Find matches</h1>
        <input
          id="input_search"
          placeholder="Search string"
          value={inputSearchValue}
          onChange={this.getInputSearchValue}
        />
        <textarea
          id="textarea"
          placeholder="Text in which you need to find matches"
          value={textareaValue}
          onChange={this.getTextareaValue}
        />
        <div
          id="text_div"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: this.getTextDivValue(),
          }}
        />
      </div>
    );
  }
}
