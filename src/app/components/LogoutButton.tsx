"use client"; // クライアントコンポーネントとして動作

import { logoutAdminUser } from "../actions/userActions";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      const result = await logoutAdminUser();
      if (result === "OK") {
        alert("ログアウトされました");
      } else {
        alert("ログアウトに失敗しました");
      }
    } catch (error) {
      console.error("ログアウトエラー:", error);
      alert("エラーが発生しました");
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}
