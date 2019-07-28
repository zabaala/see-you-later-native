import React, { useState } from 'react';
import { Modal, TouchableOpacity } from "react-native";
import {BlurView} from "@react-native-community/blur";
import { FilterIcon, Options } from "~/components/Filter/style";
import OptionItem from '~/components/OptionItem';
import CloseButton from '~/components/CloseButton';

function ModalComponent({ modalVisible, setModalVisible }) {
  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
    >
      <BlurView
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingBottom: 50
        }}
        viewRef={null}
        blurAmount={50}
        blurType="light"
      >
        <Options>
          <OptionItem>Links para hoje</OptionItem>
          <OptionItem>Links favoritos</OptionItem>
          <OptionItem>Filtrar por data</OptionItem>
        </Options>

        <CloseButton
          onPress={() => {
            setModalVisible(! modalVisible)
          }}
        />
      </BlurView>

    </Modal>
  );
}

export default function Filter() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>

      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <TouchableOpacity
        onPress={() => {
          setModalVisible(! modalVisible)
        }}
      >
        <FilterIcon name="chevron-thin-down" color="#000" size={18} />
      </TouchableOpacity>

  </React.Fragment>
  );
}
