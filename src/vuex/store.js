import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        que: '',
        "plants": [
            {
                "id": 1,
                "lat_name": "Abies holophylla",
                "rus_name": "Пихта цельнолистная",
                "src": "21 24 26",
                "descr": "Вид описан в 1866 г. К. И. Максимовичем. В культуру введён в 1905 г. (G. Krussmann (1995)). По данным в первом томе «Деревья и кустарники СССР» (Васильев, Уханов, 1949, с. 80), тогда, к середине XX в., была известна в культуре единичными экземплярами лишь в Ленинграде, в Лесотехнической академии.",
                "pict": "https://www.plantarium.ru/dat/plants/2/238/684238_5503dae0.jpg",
                "pict1" : "https://www.plantarium.ru/dat/plants/2/258/566258_9fa8cff3.jpg",
                "pict2" : "https://www.plantarium.ru/dat/plants/2/260/566260_bf5fd7d3.jpg",
                "divisio": "Pinophyta",
                "classis": "Pinopsida",
                "ordo": "Pinales",
                "familia": "Pinaceae",
                "otdel": "Хвойные",
                "class": "Пинопсиды",
                "otrad": "Сосновые",
                "semeistvo": "Сосновые"
            },
            {
                "id": 2,
                "lat_name": "Malus floribunda",
                "rus_name": "Яблоня обильноцветущая",
                "src": "21 24 26",
                "descr": "Годы пребывания в коллекции Сада: до 1858-1881, около 1930–1965 и с 1983 г. по настоящее время (Связева, 2005). Здесь появилась раньше чем в других Европейских коллекциях. A. Rehder (1949) приводит более позднюю дату – 1862 г",
                "pict": "https://www.plantarium.ru/dat/plants/5/576/699576_5b926b01.jpg",
                "pict1" : "https://www.plantarium.ru/dat/plants/5/569/699569_2435b6b4.jpg",
                "pict2" : "https://www.plantarium.ru/dat/plants/1/178/244178_e4ed2fce.jpg",
                "divisio": "Magnoliophyta",
                "classis": "Magnoliopsida",
                "ordo": "Rosales",
                "familia": "Rosaceae",
                "otdel": "Покрытосеменные",
                "class": "Двудольные",
                "otrad": "Розоцветные",
                "semeistvo": "Шиповниковые"
            },
            {
                "id": 3,
                "lat_name": "Juniperus rigida",
                "rus_name": "Можжевельник твёрдый",
                "src": "21 24 26",
                "descr": "Вид описан в 1866 г. К. И. Максимовичем. В культуру введён в 1905 г. (G. Krussmann (1995)). По данным в первом томе «Деревья и кустарники СССР» (Васильев, Уханов, 1949, с. 80), тогда, к середине XX в., была известна в культуре единичными экземплярами лишь в Ленинграде, в Лесотехнической академии.",
                "pict": "https://www.plantarium.ru/dat/plants/9/974/631974_8b4148ee.jpg",
                "pict1" : "https://www.plantarium.ru/dat/plants/3/309/650309_a4f2fc23.jpg",
                "pict2" : "https://www.plantarium.ru/dat/plants/2/233/223233_c3af3874.jpg",
                "divisio": "Pinophyta",
                "classis": "Pinopsida",
                "ordo": "Cupressales",
                "familia": "Cupressaceae",
                "otdel": "Хвойные",
                "class": "Пинопсиды",
                "otrad": "Кипарисовые",
                "semeistvo": "Кипарисовые"
            },
            {
                "id": 4,
                "lat_name": "Betula medwediewii",
                "rus_name": "Берёза Медведева",
                "src": "21 24 26",
                "descr": "В Саду: 1893-1923, 1954-1968 (Связева, 2005). А. Rehder (1949) приводит более позднюю дату – 1897 г",
                "pict": "https://www.plantarium.ru/dat/plants/7/774/698774_738da169.jpg",
                "pict1" : "https://www.plantarium.ru/dat/plants/0/046/710046_c49ebbfb.jpg",
                "pict2" : "https://www.plantarium.ru/dat/plants/7/713/672713_97b581d4.jpg",
                "divisio": "Magnoliophyta",
                "classis": "Magnoliopsida",
                "ordo": "Corylales",
                "familia": "Betulaceae",
                "otdel": "Покрытосеменные",
                "class": "Двудольные",
                "otrad": "Лещиноцветные",
                "semeistvo": "Берёзовые"
            },
            {
                "id": 5,
                "lat_name": "Caragana arborescens",
                "rus_name": "Жёлтая акация",
                "src": "21 24 26",
                "descr": "По мнению О. А. Связевой (2005), с 1736 г., а возможно и раньше, постоянно растет в Саду. Появилась после экспедиции Даниэля Мессершмидта в Сибирь в 1727 г. Здесь впервые введена в культуру. Мессершмидт вернулся в Санкт-Петербург еще до создания Ботанического сада Петербургской Академии наук (существовал с 1735 по 1812 гг.), сборы экспедиции поступили в Аптекарский огород (Firsov, 1999).",
                "pict": "https://www.plantarium.ru/dat/plants/5/525/685525_afd716ea.jpg",
                "pict1" : "https://www.plantarium.ru/dat/plants/5/522/685522_3d7b77f7.jpg",
                "pict2" : "https://www.plantarium.ru/dat/plants/7/785/653785_5bdf5f2e.jpg",
                "divisio": "Pinophyta",
                "classis": "Pinopsida",
                "ordo": "Cupressales",
                "familia": "Cupressaceae",
                "otdel": "Хвойные",
                "class": "Пинопсиды",
                "otrad": "Кипарисовые",
                "semeistvo": "Кипарисовые"
            },
        ],
        otdels: [
            {name: 'Хвойные', pic: 'Хвойные.jpg'},
            {name: 'Покрытосеменные', pic: 'Покрытосеменные.jpg'},
            {name: 'Аскомицеты', pic: 'Аскомицеты.png'},
            {name: 'Базидиомицеты', pic: 'Базидиомицеты.jpg'},
            {name: 'Моховидные', pic: 'Моховидные.jpg'},
            {name: 'Печёночные мхи', pic: 'Печёночные_мхи.jpg'},
            {name: 'Папоротниковидные', pic: 'Папоротниковидные.jpg'},
        ]
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, plants) => {
            state.plants = plants
        }
    },
    actions: {},
    getters: {
        PLANTS(state) {
            return state.plants
        },
        ONE_PLANT(state, id) {
            return state.plants.find(p => p.id === id)
        },
        OTDELS(state) {
            return state.otdels
        }
    }
});

export default store;