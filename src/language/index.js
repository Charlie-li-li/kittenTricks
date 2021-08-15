import i18n from "i18n-js";
import memoize from "lodash.memoize";
import {I18nManager} from "react-native";
import * as RNLocalize from "react-native-localize";

const translationGetters = {
    zh: () => require("./translations/zh.json"),
    en: () => require("./translations/en.json"),
  };

export const lang = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
  );

const setI18nConfig = () => {
    // fallback if no available language fits
    const fallback = { languageTag: "zh", isRTL: false };
  
    const { languageTag, isRTL } =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;
  
    // clear translation cache
    lang.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
  
    // set i18n-js config
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
  };

//init module
setI18nConfig();