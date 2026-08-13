import app from './hono/webs';
import { email } from './email/email';
import userService from './service/user-service';
import verifyRecordService from './service/verify-record-service';
import emailService from './service/email-service';
import kvObjService from './service/kv-obj-service';
import oauthService from "./service/oauth-service";
import analysisService from './service/analysis-service';

export default {

	async fetch(req, env, ctx) {

		const url = new URL(req.url);

		/**
		 * Android APK 下载
		 * URL:
		 * https://mail.shungleemain.com/download/client.apk
		 *
		 * R2:
		 * mail-shungleemain-setup.apk
		 */
		if (url.pathname === '/download/client.apk') {

			const object = await env.r2.get(
				'mail-shungleemain-setup.apk'
			);

			if (!object) {

				return new Response(
					'APK 文件不存在',
					{
						status: 404
					}
				);

			}

			return new Response(
				object.body,
				{
					headers: {

						'Content-Type':
							'application/vnd.android.package-archive',

						'Content-Disposition':
							'attachment; filename="mail-shungleemain-setup.apk"',

						'Content-Length':
							object.size.toString(),

						'Cache-Control':
							'public, max-age=3600'

					}
				}
			);

		}

		/**
		 * ===== 新增：/download/ 路径返回下载按钮页面 =====
		 * 访问 https://mail.shungleemain.com/download/ 时显示此页面
		 */
		if (url.pathname === '/download/' || url.pathname === '/download') {
			return new Response(
				`<!DOCTYPE html>
				<html lang="zh-CN">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>下载 APK</title>
					<style>
						body {
							font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
							display: flex;
							justify-content: center;
							align-items: center;
							height: 100vh;
							margin: 0;
							background: #f5f7fa;
						}
						.container {
							text-align: center;
							padding: 40px;
							background: white;
							border-radius: 12px;
							box-shadow: 0 4px 20px rgba(0,0,0,0.08);
						}
						h1 {
							color: #333;
							font-weight: 500;
							margin-bottom: 30px;
						}
						.btn {
							display: inline-block;
							padding: 14px 40px;
							background: #2563eb;
							color: white;
							text-decoration: none;
							border-radius: 8px;
							font-size: 18px;
							font-weight: 500;
							transition: background 0.2s;
						}
						.btn:hover {
							background: #1d4ed8;
						}
						.btn:active {
							transform: scale(0.98);
						}
					</style>
				</head>
				<body>
					<div class="container">
						<h1>📱 下载 APK</h1>
						<a href="/download/client.apk" class="btn" download>点击下载</a>
					</div>
				</body>
				</html>`,
				{
					headers: {
						'Content-Type': 'text/html; charset=utf-8',
						'Cache-Control': 'public, max-age=300'
					}
				}
			);
		}

		/**
		 * Windows EXE 下载
		 * URL:
		 * https://mail.shungleemain.com/download/client.exe
		 *
		 * R2:
		 * mail-shungleemain-setup.exe
		 */
		if (url.pathname === '/download/client.exe') {

			const object = await env.r2.get(
				'mail-shungleemain-setup.exe'
			);

			if (!object) {

				return new Response(
					'EXE 文件不存在',
					{
						status: 404
					}
				);

			}

			return new Response(
				object.body,
				{
					headers: {

						'Content-Type':
							'application/octet-stream',

						'Content-Disposition':
							'attachment; filename="mail-shungleemain-setup.exe"',

						'Content-Length':
							object.size.toString(),

						'Cache-Control':
							'public, max-age=3600'

					}
				}
			);

		}

		/**
		 * API 请求
		 */
		if (url.pathname.startsWith('/api/')) {

			url.pathname =
				url.pathname.replace('/api', '');

			req = new Request(
				url.toString(),
				req
			);

			return app.fetch(
				req,
				env,
				ctx
			);

		}

		/**
		 * KV 文件对象
		 */
		if (
			[
				'/static/',
				'/attachments/'
			].some(
				p => url.pathname.startsWith(p)
			)
		) {

			return await kvObjService.toObjResp(
				{
					env
				},
				url.pathname.substring(1)
			);

		}

		/**
		 * Vue 前端
		 */
		return env.assets.fetch(req);

	},

	email: email,

	/**
	 * 定时任务
	 */
	async scheduled(c, env, ctx) {

		if (c.cron === '*/30 * * * *') {

			await analysisService.refreshEchartsCache(
				{
					env
				}
			);

			return;

		}

		await verifyRecordService.clearRecord(
			{
				env
			}
		);

		await userService.resetDaySendCount(
			{
				env
			}
		);

		await emailService.completeReceiveAll(
			{
				env
			}
		);

		await oauthService.clearNoBindOathUser(
			{
				env
			}
		);

		await analysisService.refreshEchartsCache(
			{
				env
			}
		);

	},

};
