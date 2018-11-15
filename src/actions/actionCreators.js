import { SET_TECHNOLOGY } from "./actionType"

const setTechnology = (text) => ({
	type:SET_TECHNOLOGY,
	tech:text
});

export default setTechnology;