module.exports = {

"[externals]/mongodb [external] (mongodb, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("mongodb", () => require("mongodb"));

module.exports = mod;
}}),
"[project]/src/lib/mongodb.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_import__("[externals]/mongodb [external] (mongodb, cjs)");
;
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
if ("TURBOPACK compile-time truthy", 1) {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global;
    if (!globalWithMongo._mongoClient) {
        globalWithMongo._mongoClient = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options);
    }
    client = globalWithMongo._mongoClient;
} else {
    "TURBOPACK unreachable";
}
const __TURBOPACK__default__export__ = client;
}}),
"[project]/src/app/services/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getProfile": (()=>getProfile),
    "getProfiles": (()=>getProfiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/mongodb.ts [app-rsc] (ecmascript)");
;
const profile_father = {
    name: '蓮見則雄',
    hobby: 'サウナ、旅行',
    area: '大阪、東京、香川、愛媛、仙台',
    club: 'ロケット制作サークル、軽音部',
    part_time_job: '医療器具制作会社のお手伝い、JAXA展示室説明員',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_mother = {
    name: '蓮見典子',
    hobby: 'サウナ、旅行',
    area: '大阪、東京、香川、愛媛、仙台',
    club: 'ロケット制作サークル、軽音部',
    part_time_job: '医療器具制作会社のお手伝い、JAXA展示室説明員',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_togo = {
    name: '蓮見登冴',
    hobby: 'サウナ、旅行',
    area: '大阪、東京、香川、愛媛、仙台',
    club: 'ロケット制作サークル、軽音部',
    part_time_job: '医療器具制作会社のお手伝い、JAXA展示室説明員',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_sister = {
    name: '蓮見まどか',
    hobby: 'サウナ、旅行',
    area: '大阪、東京、香川、愛媛、仙台',
    club: 'ロケット制作サークル、軽音部',
    part_time_job: '医療器具制作会社のお手伝い、JAXA展示室説明員',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_father_eng = {
    name: 'Hasumi Norio',
    hobby: 'Sauna, Traveling',
    area: 'Osaka',
    club: 'Light Music Club',
    part_time_job: 'Ramen shop',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_mother_eng = {
    name: 'Hasumi Noriko',
    hobby: 'Sauna, Traveling',
    area: 'Osaka',
    club: 'Light Music Club',
    part_time_job: 'Ramen shop',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_togo_eng = {
    name: 'Hasumi Togo',
    hobby: 'Sauna, Traveling',
    area: 'Osaka',
    club: 'Light Music Club',
    part_time_job: 'Ramen shop',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profile_sister_eng = {
    name: 'Hasumi Madoka',
    hobby: 'Sauna, Traveling',
    area: 'Osaka',
    club: 'Light Music Club',
    part_time_job: 'Ramen shop',
    self_introduction: [
        {
            id: "1",
            type: "h1",
            content: "Why I love Sauna"
        },
        {
            id: "2",
            type: "h2",
            content: "Relieves fatigue by improving oxygen intake"
        },
        {
            id: "3",
            type: "h3",
            content: "Sauna bathing increases blood flow nearly twice as much as at rest. As a result, oxygen intake increases, muscle fatigue substances are secreted, physical fatigue is recovered, energy is reproduced, and the effect of fatigue recovery is enhanced."
        },
        {
            id: "4",
            type: "h2",
            content: "It\'s time to face your body"
        },
        {
            id: "5",
            type: "h3",
            content: "More and more people are having difficulty understanding their senses, called alexithymia. Instead of setting the time by looking at the clock or entering at the time told by others, you can regain the sense of being in touch with yourself by judging by your heart rate."
        }
    ]
};
const profiles = [
    profile_father,
    profile_mother,
    profile_togo,
    profile_sister
];
const profiles_eng = [
    profile_father_eng,
    profile_mother_eng,
    profile_togo_eng,
    profile_sister_eng
];
const DATABASE = "DATABASE_TEST1";
const COLLECTION = "COLLECTION_TEST1";
function getDatabase() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].db(DATABASE);
}
function getCollection() {
    return getDatabase().collection(COLLECTION);
}
async function getProfiles(locale) {
    return await getCollection().find({
        locale
    }).toArray();
}
async function getProfile(locale, id) {
    const profiles = await getProfiles(locale); // profilesの取得
    return profiles.find((profile)=>profile._id === id) || null; // _idで検索して一致するものを返す
} /*
// Function to get profiles based on locale from params
export function getProfile(index: number) {
    const locale = useLocale();
  
    if (locale === "ja") {
      return profiles[index];
    } else if (locale === "en") {
      return profiles_eng[index];
    } else {
      throw new Error("Unsupported locale");
    }
  }


  // Example usage
  export function getProfiles(
    index: number,
    params: { locale: string }
  ): Profile {
    const selectedProfiles = getProfile(index);
    return selectedProfiles[index];
  }
*/ 
}}),
"[project]/src/app/en/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/geist_e531dabc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/geist_mono_68a01160.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/index.ts [app-rsc] (ecmascript)");
// import { useTranslation } from 'next-i18next';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useMessages$3e$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/esm/react-server/useMessages.js [app-rsc] (ecmascript) <export default as useMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/esm/react-server/useLocale.js [app-rsc] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/esm/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
;
;
;
;
;
;
;
const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children, params: { id } }) {
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useMessages$3e$__["useMessages"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])();
    const familyProfiles = locale === 'en' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfiles_eng"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfiles"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Home"
                        }, "home", false, {
                            fileName: "[project]/src/app/en/layout.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        familyProfiles.map((profile, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${locale}/family/${index}`,
                                children: profile.name
                            }, index, false, {
                                fileName: "[project]/src/app/en/layout.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/en/layout.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                    locale: locale,
                    messages: messages,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/en/layout.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/en/layout.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/en/layout.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/en/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/en/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js (client proxy) <module evaluation>": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_export_namespace__(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js (client proxy)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const { createClientModuleProxy } = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
__turbopack_export_namespace__(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/next-intl/dist/esm/react-server/useLocale.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/esm/react-server/useConfig.js [app-rsc] (ecmascript)");
;
function r() {
    for(var r = arguments.length, o = new Array(r), a = 0; a < r; a++)o[a] = arguments[a];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("useLocale").locale;
}
;
}}),
"[project]/node_modules/next-intl/dist/esm/react-server/useLocale.js [app-rsc] (ecmascript) <export default as useLocale>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useLocale": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$react$2d$server$2f$useLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/esm/react-server/useLocale.js [app-rsc] (ecmascript)");
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__9edcb3._.js.map