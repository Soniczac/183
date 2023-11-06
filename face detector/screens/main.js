import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            faces: []
        };

        

        this.onFacesDetected = this.onFacesDetected.bind(this);
    }
    async componentDidMount() {
        const {status} = await Camera.requestPermissionsAsync();
        this.setState({ hasCameraPermission: status === "granted" });
    }
    onFacesDetected({ faces }) {
        this.setState({ faces: faces });
    }
    
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces:[]
        }
    }

    componentDidMount() {
        Permissions
        .askAsync(Permissions.CAMERA)
        .then(this.onCameraPermission)
    }

    onCameraPermission = (status) => {
        this.setState({ hasCameraPermission: status.status === 'granted' })
    }

    onFacesDetected = (faces) => {
        this.setState({ faces: faces })
    }

    onFacesDetectionError = (error) => {
        console.log(error)
    }
    
     <View style={style,middleContainer}>
     <Camera
     style={{ flex: 1 }}>
     type={Camera.Constant.Type.front}
     FaceDetectorSettings={{
       mode: FaceDetector.Constant.Mode.fast,
       detectLandmarks: FaceDetector.Constant.Landmarks.all,
       runClassifications: FaceDetector.Constants.runClassifications.all
     }}
     onFacesDetected={this.onFacesDetected}
     onFacesDetectedError={this.onFacesDetectionError}
     </Camera>
     </View>
    
    <View style={StyleSheet.middleContainer}>
        <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.front}
        FaceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
        }}
        onFacesDetected={this.onFacesDetected}
        onFacesDetectionError={this.onFacesDetectionError}
        ></Camera>
        {this.state.faces.map((face) => (
            <Filter1 key={`face-id-${face.faceID}`} face={face}
            ></Filter1>
        ))}
    </View>
};
const data = [
    { id: "crown-pic1", src: require("../assets/crown-pic1.png")},
    { id: "crown-pic2", src: require("../assets/crown-pic2.png")},
    { id: "crown-pic3", src: require("../assets/crown-pic3.png")},
    { id: "flower-pic1", src: require("../assets/flower-pic1.png")},
    { id: "flower-pic2", src: require("../assets/flower-pic2.png")}
]

return(
    <View style={StyleSheet.lowerContainer}>
        <View style={StyleSheet.lowerTopeContainer}></View>
        <View style={StyleSheet.lowerBottomContainer}>
            <ScrollView
            contentContainerStyle={StyleSheet.filters}
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {data.map(filter_data => {
                    return(
                        <TouchableOpacity
                        key={`filter-button-${filter_data.id}`}
                        style={[
                            styles.filterButton,
                            {
                                borderColor:
                                this.state.current_filter === filter_data.id
                                ? "#FFA384"
                                : "#FFFF"
                            }
                        ]}
                        onPress={() => 
                        this.setState({
                            current_filter: `${filter_data.id}`
                        })
                        }
                        >
                            <Image
                            source={filter_data.src}
                            style={styles.filterImage}
                            ></Image>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    </View>
)

{this.state.faces.map(face => {
    if (this.state.current_filter === "crown-pic1") {
        return <Filter1 key={face.faceID} face={face} />;
    } else if (this.state.current_filter === "crown-pic2") {
        return <Filter2 key={face.faceID} face={face} />;
    }else if (this.state.current_filter === "crown-pic3") {
        return <Filter3 key={face.faceID} face={face} />;
    }else if (this.state.current_filter === "flower-pic1") {
        return <Filter4 key={face.faceID} face={face} />;
    } else if (this.state.current_filter === "flower-pic2") {
        return <Filter5 key={face.faceID} face ={face} />;
    }
})}