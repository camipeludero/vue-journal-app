import { createStore } from "vuex";
import daybook from "@/modules/daybook/store";

const store = createStore({
    modules: {
        daybook
    }
})

export default store