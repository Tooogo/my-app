interface holiday {
    id: number
    date: number
    holidays: string
}

/*
// Async function to fetch holidays data
async function fetchholidayss(apiUrl: string): Promise<holiday[]> {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

// handleAsyncErrors 関数を定義
// <T>はGenerics　実際に利用されるまで型が確定しないクラス・関数・インターフェイス。なので非同期型と相性がいい
function handleAsyncErrors<T>(fn: (...args: any[]) => Promise<T>, ...args: any[]): Promise<T | null> {
    return fn(...args).catch((error) => {
        console.error("Error:", error);
        return null; // エラー時に null を返す
    });
}



// Wrapped version of fetchholidayss using the higher-order function
const safeFetchholidayss = (url: string) => handleAsyncErrors(fetchholidayss, url);

// Example API URL
const api = 'https://holidays-jp.github.io/api/v1/date.json';

// Using the wrapped function to fetch holidayss
safeFetchholidayss(api)
    .then(data => {
        if (data) {
            console.log("Fetched holidays data:", data);
        } else {
            console.log("Failed to fetch holidays data.");
        }
    })
    .catch(err => {
        // This catch block might be redundant, depending on your error handling strategy within the higher-order function
        console.error("Error in safeFetchholidayss:", err);
    });
*/


const fetchHolidays = async (): Promise<Array<{ date: string; holidays: string }> | string> => {
    const api = "https://holidays-jp.github.io/api/v1/date.json";

    try {
        const response = await fetch(api);
        const data: Record<string, string> = await response.json(); // APIのデータを取得
        const holidays = Object.entries(data).map(([date, holidays
    
        ]) => ({
            date,
            holidays
    ,
        }));

        return holidays;

    } catch (error) {
        // エラー発生時は必ず文字列を返す
        return error instanceof Error ? error.message : "An unknown error occurred";
    }
};

fetchHolidays().then((result) => {
    console.log("Result:", result);
}).catch((err) => {
    console.error("Unexpected error:", err);
});
