import React, { useState } from 'react';
import OrgSelector from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer/SubComponents/OrgSelector';
import GoodsSearch from '@/components/FilterSelectDrawer/SubComponents/SearchPanel/GoodsSearch.jsx';
import FilterSelectDrawer from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer';
import SelectContent from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/SelectContent';
import SubTab from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawerBox/CorpsBox/node_modules/@/components/FilterSelectDrawer/SubTab';
import SupplierSearch from '@/components/FilterSelectDrawerBox/CorpsGoodBox/node_modules/@/components/FilterSelectDrawer/SubComponents/SearchPanel/SupplierSearch';

export default function FilterSelectDrawerBox(props) {
  const [selectOrgNoData, setSelectOrgNoData] = useState({
    SingleAgencys: {}, // 机构多选
    SingleAgency: {}, // 机构单选

  });
  const [modalVisible, setModalVisiable] = useState(false);

  const submit = () => {
    const corpid = Object.values(selectOrgNoData.SingleAgencys).map(item => item.key);
    props.getCorpidData(corpid.join(','));
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
    setSelectOrgNoData(data)
  };

  const onSelectOrgSingle = data => {
    console.log(data);
  };

  const onSelectSuppiler = data => {
    console.log(data);
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
          comp={<OrgSelector onSingleClick={onSelectOrgSingle} single />}
          name="单选机构选择"
        />
        <SubTab comp={<SupplierSearch onSelect={onSelectSuppiler} />} name="供应商搜索" />
        <SubTab
          comp={<SupplierSearch onSelect={onSelectSuppiler} single />}
          name="供应商搜索单选"
        />
        <SubTab comp={<GoodsSearch onSelect={onSelectSuppiler} single />} name="商品搜索单选" />
      </FilterSelectDrawer>
    </div>
  );
}
