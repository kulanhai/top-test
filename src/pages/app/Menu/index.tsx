import { Menu, MenuProps } from 'antd';
import {GithubOutlined } from '@ant-design/icons';
import React from 'react'
const items: MenuProps['items'] = [
  //用户&APP

  {
    label:'用户&APP',
    key:'Menu1',
    icon: <GithubOutlined />,
    children:[
      {
        label:
         (<a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              用户
          </a>),
        key: 'menu:1',
      },
      {
        label: 'APP',
        key: 'menu:2',
      },
      {
        label: '版本等级',
        key: 'menu:3',
      },
      {
        label: 'APP流失',
        key: 'menu:4',
      },
      {
        label: 'APP登录日志',
        key: 'menu:5',
      },
      {
        label: '客户资源库',
        key: 'menu:6',
      },
    ]
  },

  //常用功能

  {
    label:'常用功能',
    key:'Menu2',
    icon: <GithubOutlined />,
    children:[
      {
        label: '接口文档',
        key: 'menu2:1',
      },
      {
        label: '密钥管理',
        key: 'menu2:2',
      },
      {
        label: '快递服务',
        key: 'menu2:3',
      },
      {
        label: '快递接口',
        key: 'menu2:4',
      },
      {
        label: '快递账号',
        key: 'menu2:5',
      },
      {
        label: '航司/船司',
        key: 'menu2:6',
      },
      {
        label: '设备管理',
        key: 'menu2:7',
      },
      {
        label: '对接管理',
        key: 'menu2:8',
      },
      {
        label: 'GPS管理',
        key: 'menu2:9',
      },
      {
        label: '供应商管理',
        key: 'menu2:10',
      },
      {
        label: 'GPS批次',
        key: 'menu2:11',
      },
    ]
  },

  //售后支持

  {
    label:'售后支持',
    key:'Menu3',
    icon: <GithubOutlined />,
    children:[
      {
        label: '工单',
        key: 'menu3:1',
      },
      {
        label: '售后评价',
        key: 'menu3:2',
      },
      {
        label: '客户培训',
        key: 'menu3:3',
      },
      {
        label: '操作指令',
        key: 'menu:4',
      },
    
    ]
  },

  //财务

  {
    label:'财务',
    key:'Menu4',
    icon: <GithubOutlined />,
    children:[
      {
        label: '接口账单文档',
        key: 'menu4:1',
      },
      {
        label: '账单流水',
        key: 'menu4:2',
      },
      {
        label: '账户',
        key: 'menu4:3',
      },
      {
        label: '账户流水',
        key: 'menu4:4',
      },
      {
        label: '开票记录',
        key: 'menu4:5',
      },
      {
        label: '公司维护',
        key: 'menu4:6',
      },
      {
        label: '销售提成',
        key: 'menu4:7',
      },
      {
        label: '财务统计',
        key: 'menu4:8',
      },
      {
        label: '财务月统计',
        key: 'menu4:9',
      },
      {
        label: '汇率管理',
        key: 'menu4:10',
      },
     
    ]
  },

  //统计

  {
    label:'统计',
    key:'Menu5',
    icon: <GithubOutlined />,
    children:[
      {
        label: '用户统计',
        key: 'menu5:1',
      },
      {
        label: 'APP统计',
        key: 'menu5:2',
      },
      {
        label: '账单统计',
        key: 'menu5:3',
      },
    ]
  },

  //系统

  {
    label:'系统',
    key:'Menu6',
    icon: <GithubOutlined />,
    children:[
      {
        label: '员工管理',
        key: 'menu6:1',
      },
      {
        label: '员工角色',
        key: 'menu6:2',
      },
      {
        label: '组织架构',
        key: 'menu6:3',
      },
      {
        label: '人力组织',
        key: 'menu6:4',
      },
      {
        label: '服务器',
        key: 'menu6:5',
      },
      {
        label: '语言包',
        key: 'menu6:6',
      },
      {
        label: '固定资产',
        key: 'menu6:7',
      },
      {
        label: '运行日志',
        key: 'menu6:8',
      },
      {
        label: '错误日志',
        key: 'menu6:9',
      },
      {
        label: '标签管理',
        key: 'menu6:10',
      },
     
    ]
  },

  //微信配置

  {
    label:'微信配置',
    key:'Menu7',
    children:[
      {
        label: '公众号配置',
        key: 'menu7:1',
      },
      {
        label: '关注者',
        key: 'menu7:2',
      },
    ]
  },
];

const MyMenu = () => {
  const [current, setCurrent] = React.useState('Menu1');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick}  selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MyMenu;