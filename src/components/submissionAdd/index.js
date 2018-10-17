import React, {Component} from 'react'
import {Button,List, InputItem,TextareaItem } from 'antd-mobile'
import Header from '../header'
import Submission from "../submission"
import styles from './index.less'
import { createForm } from 'rc-form'

class submissionAdd extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    handleClick = () => {
            this.props.form.validateFields(( value) => {
              console.log( value)
            })
      }
     
    render(){
        const { getFieldProps } = this.props.form
        return(
            <div className={styles.box}>
             <Header />
             <Submission />
                <div className={styles.head}>
                <div className={styles.header}>
                      <span className={styles.title}>报修内容</span>
                    </div>
                    <div className={styles.button}>
                      <Button  inline size="small" style={{ marginRight: '4px' }} onClick={this.handleClick}>提交</Button>  
                    </div>
                </div>
               <div className={styles.message}>
                 <List >
                   <InputItem
                    {...getFieldProps('message')}
                    clear
                    placeholder="有青蛙"
                    ref={el => this.autoFocusInst = el}
                    >报修事项</InputItem>
                    <InputItem
                    {...getFieldProps('phone')}
                    clear
                    placeholder="1555120"
                    ref={el => this.autoFocusInst = el}
                    >联系电话</InputItem>
                    <TextareaItem
                     {...getFieldProps('count', {
                    //  
                      })}
                    placeholder="马路上有青蛙"
                     rows={5}
                     count={100}
                     title="报修内容"
                      />
                 </List>
               </div>
            </div>
        )
    }
}
const BasicInputExampleWrapper = createForm()(submissionAdd)
export default BasicInputExampleWrapper