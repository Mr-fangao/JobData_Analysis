//位于store.js 中
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    /*
     * state指的就是储存的数据，
     * 下面的数据是我在项目中需要用的数据字段
     * */
    state: {
        total: '',
        information: [],
        list: [],
        shapePoi: "",
        length: "",
        housueName: "",
        companyName: "",
        houseInforA: {},
        HouseOne: [],
        HouseTwo: [],
        HouseThree: [],
        HouseFour: [],
        dataDeatil: {},
        maphouseData: [],
        GwrData: [],
    },
    /*
     * mutations里面规定的就是想要改变state(数据)的动作函数，
     * 下面的user_message 就是我将传入的message赋值给仓库中的
     * state数据字段，达到更新数据的目的
     * */
    mutations: {
        compareHouseOne(state, rsp) {
            state.HouseOne = rsp.data;
        },
        compareHouseTwo(state, rsp) {
            state.HouseTwo = rsp.data;
        },
        compareHouseThree(state, rsp) {
            state.HouseThree = rsp.data;
        },
        compareHouseFour(state, rsp) {
            state.HouseFour = rsp.data;
        },
        user_message(state, rsp) {
            state.total = rsp.length;
            state.information = rsp.data;
        },
        aroundInfo(state, rsp) {
            debugger;
            state.list = rsp.data;
            state.length = rsp.length;
        },
        housePoint(state, houseShape) {
            state.shapePoi = houseShape;
        },
        housueName(state, housueName) {
            debugger
            state.housueName = housueName
        },
        companyName(state, company) {
            state.companyName = company
        },
        houseInfoId(state, rsp) {
            state.houseInforA = rsp.data;
        },
        dataRap(state, data) {
            state.dataDeatil = data
        },
        mapHouse(state, houseMap) {
            state.maphouseData = houseMap
        },
        gwr(state, GWR) {
            debugger;
            state.GwrData = GWR
        }
    }
})