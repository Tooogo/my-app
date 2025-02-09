module.exports = {

"[externals]/mongodb [external] (mongodb, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("mongodb", () => require("mongodb"));

module.exports = mod;
}}),
"[project]/src/lib/mongodb.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
let clientPromise;
if ("TURBOPACK compile-time truthy", 1) {
    let globalWithMongo = global;
    if (!globalWithMongo._mongoClientPromise) {
        globalWithMongo._mongoClientPromise = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](uri, options).connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    "TURBOPACK unreachable";
}
const __TURBOPACK__default__export__ = clientPromise;
}}),
"[project]/src/app/services/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getProfile": (()=>getProfile),
    "getProfile_eng": (()=>getProfile_eng),
    "getProfiles": (()=>getProfiles),
    "getProfiles_eng": (()=>getProfiles_eng)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/mongodb.ts [app-ssr] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].db(DATABASE);
}
function getCollection() {
    return getDatabase().collection(COLLECTION);
}
async function getProfiles() {
    const profiles = await getCollection().find({}).toArray();
    /*
    const db = client.db(DATABASE);
    const profiles = await db
        .collection(COLLECTION)
        .find({})
        .toArray();
    */ return profiles;
}
async function getProfile(index) {
    const profiles = await getProfiles();
    return profiles[index];
}
getProfiles().then((profiles)=>console.log(profiles)).catch(console.error);
function getProfile_eng(index) {
    return profiles_eng[index];
}
function getProfiles_eng() {
    return profiles_eng;
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
"[project]/src/app/ja/family/[id]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/app/page.tsx
__turbopack_esm__({
    "default": (()=>FamilyMember)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/services/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$index$2e$react$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/index.react-client.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const headerFormatting = (block, h2Count)=>{
    switch(block){
        case "h1":
            return `${2}.`;
        case "h2":
            return `2.${h2Count}`;
        default:
            return "";
    }
};
const textStyling = (block)=>{
    switch(block){
        case "h1":
            return "text-4xl font-bold";
        case "h2":
            return "text-2xl font-medium";
        case "h3":
            return "text-sm font-normal";
        default:
            return "";
    }
};
function FamilyMember({ params }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$index$2e$react$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Home');
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$index$2e$react$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const profile = locale === 'ja' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile"])(Number(params.id)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProfile_eng"])(Number(params.id));
    let h2Count = 0; // h2が出てきた回数をカウントする変数
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col gap-8 row-start-2 items-center sm:items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "dark:invert",
                        src: "/sauna3.png",
                        alt: "Next.js logo",
                        width: 300,
                        height: 50,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "marker:text-4xl font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-bold",
                                        children: t('selfIntroduction')
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 80
                                    }, this),
                                    t('name'),
                                    ": ",
                                    profile.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 40
                                    }, this),
                                    t('hobby'),
                                    ": ",
                                    profile.hobby,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 42
                                    }, this),
                                    t('area'),
                                    ": ",
                                    profile.area,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 40
                                    }, this),
                                    t('club'),
                                    ": ",
                                    profile.club,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 40
                                    }, this),
                                    t('partTimeJob'),
                                    ": ",
                                    profile.part_time_job
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            profile.self_introduction.map((block, index)=>{
                                if (block.type === "h2") {
                                    h2Count++;
                                }
                                const textStyle = textStyling(block.type);
                                const sectionFormatting = headerFormatting(block.type, h2Count);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 marker:text-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${textStyle}`,
                                            children: [
                                                sectionFormatting,
                                                " ",
                                                block.content
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 94
                                        }, this)
                                    ]
                                }, block.id || index, true, {
                                    fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 items-center flex-col sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",
                        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "dark:invert",
                                src: "/vercel.svg",
                                alt: "Vercel logomark",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            "Deploy now"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",
                        href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Read our docs"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "row-start-3 flex gap-6 flex-wrap items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
                        href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": true,
                                src: "/file.svg",
                                alt: "File icon",
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            "Learn"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
                        href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": true,
                                src: "/window.svg",
                                alt: "Window icon",
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            "Examples"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "flex items-center gap-2 hover:underline hover:underline-offset-4",
                        href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": true,
                                src: "/globe.svg",
                                alt: "Globe icon",
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            "Go to nextjs.org →"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ja/family/[id]/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ja/family/[id]/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/ja/family/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__9a580f._.js.map