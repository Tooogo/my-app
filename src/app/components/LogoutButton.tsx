"use client";

import { useRouter } from 'next/navigation';
import { logoutAdminUser } from "../actions/userActions";
import { logger } from "@/lib/logger";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      logger.info("ログアウト処理を開始しました", { action: "logout" });
      const { status, redirectTo } = await logoutAdminUser();

      if (status === "OK") {
        alert("ログアウトされました");
        router.replace(redirectTo);
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
