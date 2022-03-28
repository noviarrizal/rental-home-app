import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
			"X-RapidAPI-Key": "bf3ff17fbcmsh1dbb4c0b6f597ffp112b71jsnf146bc3811b1",
		},
	});

	return data;
};
