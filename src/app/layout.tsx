import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND_NAME } from "@/const/const";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: `${BRAND_NAME} - スケジュール調整`,
	description: "スケジュール調整のためのツールです。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
