import { appEnv } from '../constants/Env.constant';
import { langPaths } from '../languages/paths.lang';

// load proper language strings, accordingly to the server language settings

export class TS {
  public static string = (
    file: any = null,
    key: string,
    customVars: object = {}
  ) => {
    // load language strings for a specific file
    const { strings } = langPaths[file];

    const languageStrings = {
      ...strings
    };

    // Replace variables {{ n }}

    let string: string = languageStrings[key][appEnv.language];

    if (!string) {
      //if no translation is available for this string, use english as fallback!
      string = languageStrings[key].eng;
    }

    const customVarsKeys = Object.keys(customVars);
    if (customVarsKeys) {
      for (const k of customVarsKeys) {
        string = string.replace(new RegExp(`{{${k}}}`, "g"), customVars[k]);
      }
    }

    return string;
  };
}
