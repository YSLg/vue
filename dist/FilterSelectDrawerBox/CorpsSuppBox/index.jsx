import React, { useState } from 'react';
import OrgSelector from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer/SubComponents/OrgSelector';
import FilterSelectDrawer from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer';
import SelectContent from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/SelectContent';
import SubTab from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer/SubTab';
import SupplierSearch from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawer/SubComponents/SearchPanel/SupplierSearch';

export default function FilterSelectDrawerBox(props) {
  const [selectOrgNoData, setSelectOrgNoData] = useState({
    Corp: {}, // 机构
    Supp: {}, // 供应商
  });
  const [modalVisible, setModalVisiable] = useState(false);

  const submit = () => {
    props.getCorpidData({
      Corp: selectOrgNoData.Corp,
      Supp: selectOrgNoData.Supp
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
      Supp: Object.values(data).map(item => item.key).join(',')
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
        <SubTab
          comp={<SupplierSearch onSelect={onSelectSuppiler} single />}
          name="供应商搜索单选"
        />
      </FilterSelectDrawer>
    </div>
  );
}
