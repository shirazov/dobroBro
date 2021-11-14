import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, Dimensions,
  TouchableOpacity,
   Image, Platform,
} from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import Svg, { Ellipse } from "react-native-svg";

import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { Camera } from 'expo-camera';
import ModalDropdown from 'react-native-modal-dropdown';






const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.001999;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />



      <View style={styles.logo}>
        <Text style={styles.logoT}>лого</Text>
      </View>

      <View style={styles.auto}>

        <Text style={styles.auntT}> Авторизация </Text>

        <TextInput
          placeholder=" Логин"
          placeholderTextColor="#393E46"
          style={styles.TextInput}
        />
        <TextInput
          placeholder=" Пароль"
          placeholderTextColor="#393E46"
          style={styles.TextInput1}
        />

        <View style={styles.butnV}>
          <Button
            title="Войти"
            color="#3C2B00"
            style={styles.butn}
            onPress={() => navigation.navigate('Геопозиция')}
          />

        </View>
      </View>

      <View style={styles.naj}>
        <Text style={styles.najT}>Нажимая, Вы принимаете условия</Text>
        <Text style={styles.Vi}>Пользовательское соглашения</Text>
      </View>
    </View>
  );
}

function GeoScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  let text = 'неопределено';
  let text2 = 'неопределено';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords.latitude);
    text2 = JSON.stringify(location.coords.longitude);
  }


  return (
    <View style={styles.containerGeo}>

      <Text style={styles.geoNe}>
        Широта: {text} </Text>
      <Text style={styles.geoNe1}>
        Долгота: {text2}</Text>

      <Button
        title="Определить геопозицию"
        color="#75AF48"
        style={styles.butn}
        onPress={() => {
          (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
          })();
        }
        }
      />

      <View style={styles.dalButView}>
        <Button
          title="Дальше"
          color="#3C2B00"
          style={styles.dalBut}
          onPress={() => navigation.navigate('Параметры')}
        />
      </View>

    </View>







    // <View style={styles.containerMap}>
    //   <MapView
    //   userLocationAnnotationTitle= {"Я"}
    //   showsUserLocation = {true}
    //   userInterfaceStyle={'dark'}
    //   userLocationUpdateInterval = {500}

    //     style={styles.map}
    //     ref={ref => { this.map = ref; }}
    //     initialRegion={{
    //       latitude: 56.00557001872855,
    //       longitude: 92.82998555897588,
    //       latitudeDelta: LATITUDE_DELTA,
    //       longitudeDelta: LONGITUDE_DELTA,
    //     }}
    //   >
    //     {/* {this.createMarkers()} */}
    //   </MapView>
    //   <View pointerEvents="none" style={styles.members}>
    //     {/* {this.createMembers()} */}
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity
    //       // onPress={() => this.fitToMarkersToMap()}
    //       style={[styles.bubble, styles.button]}
    //     >
    //       <Text style={styles.Nati}>Найти сотрудников</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}






function ViborSсreen({ navigation }) {
  let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];

  return (
    <View style={styles.containerVibor}>

      <View style={styles.viNahView}>
        <Text style={styles.viNah}> Вы находитесь: </Text>
      </View>

      <View style={styles.NazView}>
        <View style={styles.Naz1View}>
          <Text style={styles.NazT}> Поле Чудеs </Text>
          <Text style={styles.dopInfT}> Дополнительная информация </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Svg viewBox="0 0 50 50" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(101,227,182,1)"
              cx={20}
              cy={20}
              rx={20}
              ry={20}
            ></Ellipse>
          </Svg>
        </View>
      </View>

      <View style={styles.IzmTV}>
        <Text style={styles.IzmT}>Изменить местоположение</Text>
      </View>

      <View style={styles.viNahView}>
        <Text style={styles.vibSort}> Выберите сорт подсолнечника: </Text>
      </View>

      <View style={styles.vibSortView}   >

      <ModalDropdown style={{fontSize: 40}} options={['ЛГ 5377 1', 'ЛГ 50270', 'НК РОКИ', 'Мегасан', 'ЛГ 5450', 'Тунка', 'ЛГ 5580', 'НК  БРИО','НК КОНДИ','ЛГ 5463 КП','ЛГ 5543 КЛ','ЛГ 5542 КЛ','ЛГ 5555 КЛП','ЛГ 50635 КЛП']}/>
      </View>







      <View style={styles.NazView}>
        <View style={styles.Naz1View}>
          <Text style={styles.NazT}> ЛГ 50270 </Text>
          <Text style={styles.dopInfT}> 92-95, Классические гибриды, Коссад </Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Svg viewBox="0 0 50 50" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(101,227,182,1)"
              cx={20}
              cy={20}
              rx={20}
              ry={20}
            ></Ellipse>
          </Svg>
        </View>
      </View>

      <View style={styles.podtButView}>
        <Button
          title="Подтвердить"
          color="#3C2B00"
          style={styles.podtBut}
          onPress={() => navigation.navigate('Загрузка фото и расчёт')}
        />

      </View>





    </View>
  );
}


function PhotoSсreen({ navigation }) {




  const [status, requestPermission] = MediaLibrary.usePermissions();

  const [image, setImage] = useState(null);



  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.containerPhoto}>
      <Text style={styles.NetFoT}> Загрузите фотографии </Text>

      <View style={styles.cameraV}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <View style={styles.BioView1}>
        <View style={styles.DobButtV}>
          <Button title="Добавить фотографии"
            color="#3C2B00"
            style={styles.DobButt}
            onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        </View>

        <View style={styles.VeDiPloView}>
          <TextInput
            placeholder=" Площадь га                            "
            placeholderTextColor="#393E46"
            style={styles.TextInputP}
          />
          <View style={styles.podButtView}>
            <Button
              title="Рассчитать"
              color="#3C2B00"
              style={styles.podButt}
            />
          </View>
        </View>
      </View>




      <View style={styles.bioTV}>
        <Text style={styles.goT}> Готовый расчёт: </Text>
      </View>


      <View style={styles.NazView1}>
        <View style={styles.Naz1View}>
          <Text style={styles.NazT}> Название:</Text>
          <Text style={styles.NazT}> Площадь: </Text>
        </View>


        <View style={styles.Naz1View}>
          <Text style={styles.znT}> Сорт подсолнечник</Text>
          <Text style={styles.znT}> 1000га </Text>

          <View style={styles.BioView}>
            <Text style={styles.BioT}> Биологическая уражайность:</Text>
            <Text style={styles.otvT}> 33.5га </Text>
          </View>

        </View>

      </View>


      <View style={styles.rezView}>
        <View style={styles.saveButtV}>
          <Button
            title="Сохранить"
            color="#3C2B00"
            style={styles.saveButt}
          />
        </View>

        <View style={styles.podButtView}>
          <Button
            title="Поделиться"
            color="#3C2B00"
            style={styles.podButt}
          />
        </View>
      </View>
    </View>
  );
}



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        //screenOptions={{headerShown: false}}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFBA0',
          },
          headerTintColor: '#3A2A00',
        }}
      >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />

        <Stack.Screen name="Геопозиция" component={GeoScreen} />

        <Stack.Screen name="Параметры" component={ViborSсreen} />

        <Stack.Screen name="Загрузка фото и расчёт" component={PhotoSсreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  Nati: {
    //marginTop: 14,
    overflow: "visible",
    color: "#3C2B00",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 7
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: '#E8EFF8',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  },

  button: {
    width: 80,
    //paddingHorizontal: 100,
    alignItems: 'center',
    marginHorizontal: 500,

  },
  buttonContainer: {

    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  members: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },



  container: {
    flex: 1,
    backgroundColor: "#FEFFCE",
    alignItems: 'center',
    justifyContent: 'center',
  },
  auto: {
    //marginTop: 700, не работает на viewы
    //backgroundColor: "#3A2A00",
    marginTop: 15,
    justifyContent: 'center',
  },
  auntT: {
    marginTop: 22,
    overflow: "visible",
    color: "#3C2B00",
    fontSize: 40,
    marginBottom: 7

  },

  logo: {
    //flex:1,
    flexDirection: 'column',
    marginTop: 0,
    fontWeight: "900",
    //backgroundColor: "#3A2A00",
    justifyContent: 'center'
  },
  logoT: {
    fontWeight: 'bold',
    fontSize: 60,
    color: "#000"
  },
  TextInput: {
    paddingLeft: 8,
    color: '#3A2A00',
    marginTop: 25,
    height: 40,
    borderColor: '#393E46',
    borderWidth: 2,
    borderRadius: 10,

  },
  TextInput1: {
    paddingLeft: 8,
    color: '#3A2A00',
    marginTop: 5,
    height: 40,
    borderColor: '#393E46',
    borderWidth: 2,
    borderRadius: 10,

  },
  butnV: {
    paddingTop: 14,
    borderRadius: 10
  },
  butn: {
    //backgroundColor: '#3A2A00',
    //borderRadius: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100',
  },
  naj: {
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  najT: {
    color: '#393E46',
  },
  Vi: {
    color: '#393E46',
    textDecorationLine: "underline",
    marginBottom: 50,
  },





  ///////////................................................экран геопозиции
  containerGeo: {
    flex: 1,
    backgroundColor: "#FEFFCE",
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',

    backgroundColor: "#FEFFCE",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  geoNe: {
    marginTop: 12,
    overflow: "visible",
    color: "#3A2A00",
    fontSize: 22,
    marginBottom: 2,
  },
  geoNe1: {
    marginTop: 4,
    overflow: "visible",
    color: "#3A2A00",
    fontSize: 22,
    marginBottom: 7,
    marginBottom: 100,
  },

  dalButView: {
    paddingTop: 14,
    borderRadius: 10,
    marginTop: 150,
    marginLeft: 300,
    paddingBottom: 40,
    marginBottom: 40,
  },
  dalBut: {
    paddingTop: 14,
    borderRadius: 10,
    marginTop: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100',
  },

  //////.......................................................... ViborScreen
  containerVibor: {
    flex: 1,
    backgroundColor: "#FFFDD7",
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },

  viNahView: {
    marginTop: 22,
    textAlign: 'left',

  },

  viNah: {
    marginLeft: 22,
    marginTop: 12,
    overflow: "visible",
    color: "#3A2A00",
    fontSize: 18,
    marginBottom: 7,
  },
  NazView: {
    backgroundColor: '#75AF48',
    flexDirection: 'row',
    paddingTop: 8,
    marginTop: 8,
    marginLeft: 22,
    textAlign: 'left',
    borderRadius: 10,
    paddingBottom: 5,
    marginRight: 22,
    borderWidth: 2,
    borderColor: "#3A2A00",

  },
  NazT: {
    color: '#fff',
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 26,
  },
  dopInfT: {
    color: '#fff',
    marginTop: 10,
    marginLeft: 26,
  },

  ellipse: {
    marginTop: 8,
    width: 70,
    height: 70
  },










  vibSort: {
    marginLeft: 22,
    marginTop: 24,
    overflow: "visible",
    color: "#3A2A00",
    fontSize: 18,
    marginBottom: 7,
  },
  vibSortView: {
    flexDirection: 'row',

    marginTop: 8,
    marginLeft: 22,
    textAlign: 'left',
    borderRadius: 10,
    paddingBottom: 25,
    marginRight: 22
  },



















  infPodsV: {
    marginTop: 18,
    textAlign: 'left',
  },
  IzmT: {
    marginTop: 10,
    color: "rgba(101,227,182,1)",
    alignContent: "flex-end",
    alignContent: "center",
  },
  IzmTV: {
    alignContent: "center",
    marginLeft: 200,
    marginBottom: 40
  },



  podtButView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 270,
    paddingTop: 50,
    borderRadius: 10,
    marginTop: 15,

  },
  podtBut: {
    paddingTop: 14,
    borderRadius: 10,
    marginTop: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,

  },



  ///////////................................................экран PHOTO
  containerPhoto: {
    flex: 1,
    backgroundColor: "#FEFFCE",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  NetFoT: {
    marginTop: 0,
    color: "#3A2A00",
    alignContent: "flex-end",
    alignContent: "center",
    fontSize: 22,
    marginBottom: 2,
  },
  camera: {
    width: 237,
    height: 237,
    
    borderWidth: 2,
    borderColor: "#2A2A00",
    borderRadius: 10,
  },
  cameraV: {

    marginLeft: 12,
    marginRight: 12,
    color: "#2A2A00",
    borderWidth: 5,
    borderColor: "#0BA55D",
    borderRadius: 10,
    marginBottom: 6,
  },
  DobButtV: {
    marginBottom: 8
  },
  DobButt: {
    paddingTop: 4,
    borderRadius: 10,
    marginTop: 20,
  },
  VeDiPloView: {
    alignContent: 'center',
    flexDirection: 'row',
    paddingBottom: 4,
  },
  podButt: {
    alignContent: 'center',
    marginLeft: 10,
  },
  TextInputP: {
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 8,
    color: '#3A2A00',
    height: 40,
    borderColor: '#393E46',
    borderWidth: 2,
    borderRadius: 10,
  },
  znT: {
    color: '#fff',
    marginTop: 12,
    marginLeft: 50,
    marginRight: 50
  },
  NazView1: {
    flexDirection: 'row',
    paddingTop: 2,
    marginLeft: 22,
    textAlign: 'left',
    backgroundColor: "#75AF48",
    borderRadius: 10,
    paddingBottom: 5,
    marginBottom: 20,
    marginRight: 22,
    borderWidth: 3,
    borderColor: "#3A2A00"
  },
  BioView: {
    marginTop: 8,
    backgroundColor: "#FFFBA0",
    borderRadius: 10,
    paddingBottom: 10,
    paddingRight: 10,
    marginRight: 22,
    borderWidth: 2,
    borderColor: '#3A2A00'
  },

  BioView1: {
    marginLeft: 22,
    //paddingTop: 8,
    padding: 22,
    backgroundColor: "#FFFBA0",
    borderRadius: 10,
    paddingBottom: 10,
    paddingRight: 10,
    marginRight: 22,
    borderWidth: 2,
    borderColor: '#3A2A00'
  },

  bioTV: {
    marginTop: 4,
    textAlign: 'left',
    justifyContent: 'flex-start'
  },
  BioT: {
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  otvT: {
    marginTop: 5,
    marginLeft: 10,
  },
  rezView: {
    flexDirection: 'row'
  },
  saveButtV: {
    marginRight: 35,
    marginBottom: 15
  },
  saveButt: {
    color: '#fff'
  },
  goT: {
    overflow: "visible",
    color: "#3A2A00",
    fontSize: 26,
    marginBottom: 4,
  },


});