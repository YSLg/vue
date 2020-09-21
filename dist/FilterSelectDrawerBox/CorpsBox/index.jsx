/**
 * @name: 
 * @test: 单个机构多选
 * @msg: 
 * @param {type} 
 * @return {type} 
 */
import React, { useState } from 'react';
import OrgSelector from '@/components/FilterSelectDrawer/SubComponents/OrgSelector';
import FilterSelectDrawer from '@/components/FilterSelectDrawer';
import SelectContent from '@/components/SelectContent';
import SubTab from '@/components/FilterSelectDrawer/SubTab';

export default function FilterSelectDrawerBox(props) {
  const [selectOrgNoData, setSelectOrgNoData] = useState({
    Corp: {}, // 机构多选
  });
  const [modalVisible, setModalVisiable] = useState(false);

  const submit = () => {
    const corpid = Object.values(selectOrgNoData.Corp).map(item => item.key);
    props.getCorpidData({
      Corp: corpid.join(',')
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
      Corp: data,
    });
  };
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
      </FilterSelectDrawer>
    </div>
  );
}
