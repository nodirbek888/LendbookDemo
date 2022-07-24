// import React from 'react'

// const Number = () => {
//   return (
//     <div>Number</div>
//   )
// }

// export default Number


import { SettingOutlined } from '@ant-design/icons';
import { Cascader, InputNumber, Select, Space } from 'antd';
import React from 'react';
import {Container} from './style'
const { Option } = Select;
const selectBefore = (
  <Select
    defaultValue="add"
    style={{
      width: 60,
    }}
  >
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select
    defaultValue="UZS"
    style={{
      width: 100,
    }}
  >
    <Option value="UZS">so'm</Option>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="CNY">rubddd</Option>
  </Select>
);

const App = () => (
  <Container>

  <Space direction="vertical">
    {/* <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} /> */}
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    {/* <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} /> */}
    {/* <InputNumber
      addonBefore={
        <Cascader
          placeholder="cascader"
          style={{
            width: 150,
          }}
          />
        }
      defaultValue={100}
    /> */}
  </Space>
    </Container>
);

export default App;