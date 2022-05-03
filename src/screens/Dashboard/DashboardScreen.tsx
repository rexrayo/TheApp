import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Background } from '../../components/Background/Background';
import { Card } from '../../components/Card/Card';
import { StyledImage } from '../../components/GlobalStyled/GlobalStyled';
import { device } from '../../constant';

export const DashboardScreen: React.FC = () => {

  const { top } = useSafeAreaInsets();
  const { width, height } = device;


  return (
    <Background>
      <View style={{ top: top + 20, marginBottom: 50 }}>
      {/* <Image style={{width: 50, height: 50, marginBottom: 10, resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center'}} 
      source={require('../../../assets/images/kal-black.png') }/> */}
        <Card >
          <Swiper containerStyle={{ maxHeight: height - 300 }} showsButtons={false} showsPagination={false} loop={false} removeClippedSubviews={true}>
            <StyledImage source={require('../../../assets/images/CardImage.jpg')}/>
            <StyledImage source={require('../../../assets/images/CardImage.jpg')}/>
            <StyledImage source={require('../../../assets/images/CardImage.jpg')}/>
          </Swiper>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, width: '95%'}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>David Kaller</Text>
              <Text>Programmer</Text>
            </View>
            <Text style={{fontSize: 20, textAlign: 'center',textAlignVertical: 'center'}}>25</Text>
          </View>
        </Card>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
          <View style={{width: 70, height: 70, borderRadius: 50, backgroundColor: '#ff000057', justifyContent: 'center'}}>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Ionicons 
                color={ 'rgb(255, 0, 0)' } 
                size={ 35 } 
                name="close"
                />
            </TouchableOpacity>
          </View>
          <View style={{width: 70, height: 70, borderRadius: 50, backgroundColor: '#00ff3745', justifyContent: 'center'}}>
            <TouchableOpacity style={{alignSelf: 'center'}}>
            <Ionicons 
                color={ '#00aa25' } 
                size={ 35 } 
                name="heart"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}
