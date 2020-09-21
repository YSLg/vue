import React, { useState } from 'react';
import OrgSelector from '@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer/SubComponents/OrgSelector';
import GoodsSearch from '@/components/FilterSelectDrawer/SubComponents/SearchPanel/GoodsSearch.jsx';
import FilterSelectDrawer from '@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer';
import SelectContent from '@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/SelectContent';
import SubTab from '@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer/SubTab';

export default function FilterSelectDrawerBox(props) {
  const [selectOrgNoData, setSelectOrgNoData] = useState({
    Corp: {}, // 机构
    Good: {}, // 商品
  });
  const [modalVisible, setModalVisiable] = useState(false);

  const submit = () => {
    props.getCorpidData({
      Corp: selectOrgNoData.Corp,
      Good: selectOrgNoData.Good
    });
    setModalVisiable(false);
  };

  const close = () => {
    setModalVisiable(false);
  };

  const showFilterBox = () => {
    setModalVisiable(true);
  };

  const ParentPranrms = {
    selectOrgNoData,
    close,
    submit,
    modalVisible,
  };

  const onSelectOrg = data => {
    setSelectOrgNoData({
      ...selectOrgNoData,
      Corp: Object.values(data).map(item => item.key).join(',')
    })
  };
  
  const onSelectSuppiler = data => {
    setSelectOrgNoData({
      ...selectOrgNoData,
      Good: Object.values(data).map(item => item.key).join(',')
    })
  }

  return (
    <div style={{ marginRight: '16px', float: 'left' }}>
      <SelectContent
        text="已选"
        itemData={selectOrgNoData}
        onClickFc={showFilterBox}
        width={200}
        selectTextWidth={160}
      />
      <FilterSelectDrawer {...ParentPranrms}>
        <SubTab comp={<OrgSelector onSelect={onSelectOrg} />} name="机构选择"></SubTab>
        <SubTab comp={<GoodsSearch onSelect={onSelectSuppiler} single />} name="商品搜索" />
      </FilterSelectDrawer>
    </div>
  );
}
