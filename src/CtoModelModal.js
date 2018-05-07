import React, {Component} from 'react';
import { Button, Form, Header, Label, Modal } from 'semantic-ui-react';

export default class CtoModelModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      dataTypes: {},
      samples: {},
    };
  }

  handleClickOpen() {
    const that = this;
    that.setState({ open: true });
  }

  handleCancel() {
    this.setState({ open: false });
  }

  handleSubmit() {
    console.log('State upon submit', this.state);
    this.setState({ open: false });
  }

  handleDataTypeChange(varName, event) {
    this.setState({ dataTypes: {...this.state.dataTypes, [varName]: event.target.value }});
  }

  handleSampleChange(varName, event) {
    this.setState({ samples: {...this.state.samples, [varName]: event.target.value }});
  }

  // static getVariables(str) {
  //   const regex = /\[(.*?)\]/g;
  //   const variables = [];
  //   let m;

  //   while ((m = regex.exec(str)) !== null) {
  //     // This is necessary to avoid infinite loops with zero-width matches
  //     if (m.index === regex.lastIndex) {
  //       regex.lastIndex++;
  //     }

  //     variables.push({key: m[1], type: 'String'});
  //   }

  //   return variables;
  // }

  render() {
    return (
      <div>
        <Button
          size="tiny"
          onClick={this.handleClickOpen.bind(this)}
        >
        Create CTO Model
        </Button>
        <Modal
          basic
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Header>Create CTO Model</Header>
          <Form>
            {this.props.variables.map((item) => {
              return (
                <Form.Group key={item.id}>
                  <Label key={item.id}>{item.key}</Label>
                  <Form.Input
                    key={item.id}
                    type="text"
                    placeholder="Data Type"
                    onChange={(event) => this.handleDataTypeChange(item.key, event)}
                  />
                  <Form.Input
                    key={item.id}
                    type="text"
                    placeholder="Sample input"
                    onChange={(event) => this.handleSampleChange(item.key, event)}
                  />
                </Form.Group>
              );
            })}
          </Form>
          <Modal.Actions>
            <Button onClick={this.handleCancel.bind(this)}>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit.bind(this)}>
              Submit
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

