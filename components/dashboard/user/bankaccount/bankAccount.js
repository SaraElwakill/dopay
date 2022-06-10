import React, { useState } from 'react';
import { Col, Row ,Space, Modal } from 'antd';
import NewCard from './newCard'
import BlankCard from './blankCard';
import {NewAccountWrapper} from './bankAccount.styled'
import  { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography, Image } from "antd";
import AccountForm from './accountForm';
const { Text, Title } = Typography;





const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

 
const BankAccounts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  
  const handleOk = () => {
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
   <NewAccountWrapper>
    
      <Space direction='vertical' size='large'>
     <NewCard color='#FF6F00'/>
     <div className='chart'>
       <div className='top'>
        <div className='left'>
        <Title level={5}>Account</Title>
        <Text>453535sfffs</Text>
        </div>
        <div className='right'>
        <Image
				src='/arrow_upward.svg'
				alt='logo'
				preview={false}
				previewPrefixCls={false}
				// height='50px'
				// width='300px'
			/>
      <Text>1.10% Since last week  </Text>
        </div>
       </div>
     <AreaChart
           width={200}
           height={150}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#FF6F00" />
        </AreaChart>
			</div>
      </Space>
      <Space direction='vertical' size='large'>
     <NewCard color='#2196F3'/>
     <div className='chart'>
       <div className='top'>
        <div className='left'>
        <Title level={5}>Account</Title>
        <Text>453535sfffs</Text>
        </div>
        <div className='right'>
        <Image
				src='/arrow_upward.svg'
				alt='logo'
				preview={false}
				previewPrefixCls={false}
				// height='50px'
				// width='300px'
			/>
      <Text>1.10% Since last week  </Text>
        </div>
       </div>
     <AreaChart
           width={200}
           height={150}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#2196F3" />
        </AreaChart>
			</div>
      </Space>
      
      <BlankCard  showModal={showModal} />
      <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <AccountForm/>
      </Modal>
     </NewAccountWrapper>
  )
}

export default BankAccounts