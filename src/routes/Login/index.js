import React, { Component } from 'react'
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
// @createForm()
class BasicInputExample extends Component {
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  handleClick = () => {
    console.log('22',  this.inputRef.focus())
    console.log('this', this.props.form.getFieldsValue())
    this.inputRef.focus();
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List renderHeader={() => '帐号登录'}>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>用户名
          </div></InputItem>
          <InputItem
            placeholder="帐号"
            ref={el => this.labelFocusInst = el}
          ><div onClick={() => this.labelFocusInst.focus()}>
            密码</div></InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder="click the button below to focus"
            ref={el => this.inputRef = el}
          >密码</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick}
            >
              click to focus
            </div>
          </List.Item>
        </List>

        <WhiteSpace />

        {/*<List renderHeader={() => 'Click label to focus input'}>*/}
          {/*<InputItem*/}
            {/*placeholder="click label to focus input"*/}
            {/*ref={el => this.labelFocusInst = el}*/}
          {/*><div onClick={() => this.labelFocusInst.focus()}>标题</div></InputItem>*/}
        {/*</List>*/}

        {/*<List renderHeader={() => 'Show clear'}>*/}
          {/*<InputItem*/}
            {/*{...getFieldProps('inputclear')}*/}
            {/*clear*/}
            {/*placeholder="displayed clear while typing"*/}
          {/*>标题</InputItem>*/}
        {/*</List>*/}

        {/*<WhiteSpace />*/}

        <List renderHeader={() => 'Number of words for title'}>
          <InputItem
            {...getFieldProps('label8')}
            placeholder="limited title length"
            labelNumber={5}
          >标题过长超过默认的5个字</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Custom title（text / image / empty)'}>
          <InputItem
            {...getFieldProps('input3')}
            placeholder="no label"
          />
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="title can be icon，image or text"
          >
            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="¥"
          >价格</InputItem>
        </List>

        <WhiteSpace />
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
          <InputItem
            {...getFieldProps('digit')}
            type="digit"
            placeholder="click to show native number keyboard"
          >数字键盘</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Not editable / Disabled'}>
          <InputItem
            value="not editable"
            editable={false}
          >姓名</InputItem>
          <InputItem
            value="style of disabled `InputItem`"
            disabled
          >姓名</InputItem>
        </List>
      </div>
    );
  }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);
export default BasicInputExampleWrapper
