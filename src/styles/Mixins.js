import { Dimensions, PixelRatio } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const guidelineBaseWidth = 375;

/**
 * Scale based on width
 * @param size
 */
export const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

/**
 * Scale font size
 * @param size
 */
export const scaleFont = (size) => size * PixelRatio.getFontScale();
