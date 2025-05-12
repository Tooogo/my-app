"use client";

import { useRouter } from 'next/navigation';
import { logoutAdminUser } from "../actions/userActions";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logoutAdminUser();
      if (result === "OK") {
        alert("ログアウトされました");
        router.push("/en");
      } else {
        alert("ログアウトに失敗しました");
      }
    } catch (error) {
      console.error("ログアウトエラー:", error);
      alert("エラーが発生しました");
    } finally {
      router.refresh()
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}
