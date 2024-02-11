const levelZeroCall = async (input) => {
    const zeroProm = await fetch(`https://allforonesylvia.azurewebsites.net/SayHello/${input}`);
    const zeroResp = await zeroProm.text();
    return zeroResp;
}

const levelOneCall = async (inputOne, inputTwo) => {
    const oneProm = await fetch(`https://allforonesylvia.azurewebsites.net/TwoSum/${inputOne}/${inputTwo}`);
    const oneResp = await oneProm.text();
    return oneResp;
}

const levelTwoCall = async (inputOne, inputTwo) => {
    const twoProm = await fetch(`https://allforonesylvia.azurewebsites.net/WakeUp/${inputOne}/${inputTwo}`);
    const twoResp = await twoProm.text();
    return twoResp;
}

const levelThreeCall = async (inputOne, inputTwo) => {
    const threeProm = await fetch(`https://allforonesylvia.azurewebsites.net/Compare/${inputOne}/${inputTwo}`);
    const threeResp = await threeProm.text();
    return threeResp;
}

const levelFourCall = async (inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix) => {
    const fourProm = await fetch(`https://allforonesylvia.azurewebsites.net/MadLib/${inputOne}/${inputTwo}/${inputThree}/${inputFour}/${inputFive}/${inputSix}`);
    const fourResp = await fourProm.text();
    return fourResp;
}

const levelFiveCall = async (input) => {
    const fiveProm = await fetch(`https://allforonesylvia.azurewebsites.net/OddOrEven/${input}`);
    const fiveResp = await fiveProm.text();
    return fiveResp;
}

const levelSixCall = async (input) => {
    const sixProm = await fetch(`https://allforonesylvia.azurewebsites.net/ReverseIt1/${input}`);
    const sixResp = await sixProm.text();
    return sixResp;
}

const levelSevenCall = async (input) => {
    const sevenProm = await fetch(`https://allforonesylvia.azurewebsites.net/Reverse2/${input}`);
    const sevenResp = await sevenProm.text();
    return sevenResp;
}

const levelEightCall = async (input) => {
    const eightProm = await fetch(`https://allforonesylvia.azurewebsites.net/Magic8Ball/${input}`);
    const eightResp = await eightProm.text();
    return eightResp;
}

const levelNineCall = async (input) => {
    const nineProm = await fetch(`https://allforonesylvia.azurewebsites.net/RestaurantPicker/${input}`);
    const nineResp = await nineProm.text();
    return nineResp;
}

export { levelZeroCall,  levelOneCall,  levelTwoCall,  levelThreeCall,  levelFourCall, levelFiveCall,  levelSixCall, levelSevenCall, levelEightCall,  levelNineCall }