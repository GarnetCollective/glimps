import axios from "react-native-axios";

const BASE_URL = "http://2fe27272.ngrok.io/";

const story = axios.create({
  baseURL: BASE_URL
});

const createCollage = async pictures => {
  try {
    const { data } = await story.post("/create", { story: pictures });
    if (data.success) {
      const collage = `${BASE_URL}/${data.collage}`;
      return { success: true, collage: collage, message: "Collage created." };
    } else {
      return {
        success: false,
        message: "Unable to make request.",
        collage:
          "https://vignette.wikia.nocookie.net/spongepedia/images/d/d9/More_Handsome_Squidward_%28metaphor_for_how_overpowering_my_beauty_is%29.jpg/revision/latest?cb=20150915031836"
      };
    }
  } catch (e) {
    return {
      success: false,
      message: "Unable to make request.",
      collage:
        "https://vignette.wikia.nocookie.net/spongepedia/images/d/d9/More_Handsome_Squidward_%28metaphor_for_how_overpowering_my_beauty_is%29.jpg/revision/latest?cb=20150915031836"
    };
  }
};

export { createCollage };
