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
		 * R2 文件名:
		 * client.apk
		 *
		 * 地址:
		 * https://mail.shungleemain.com/download/client.apk
		 */
		if (url.pathname === '/download/client.apk') {

			const object = await env.r2.get('client.apk');


			if (!object) {
				return new Response('APK 文件不存在', {
					status: 404
				});
			}


			return new Response(object.body, {
				headers: {
					'Content-Type': 'application/vnd.android.package-archive',
					'Content-Disposition': 'attachment; filename="client.apk"',
					'Content-Length': object.size.toString(),
					'Cache-Control': 'public, max-age=3600'
				}
			});
		}



		/**
		 * Windows EXE 下载
		 * R2 文件名:
		 * mail-shungleemain-setup.exe
		 *
		 * 地址:
		 * https://mail.shungleemain.com/download/client.exe
		 */
		if (url.pathname === '/download/client.exe') {

			const object = await env.r2.get(
				'mail-shungleemain-setup.exe'
			);


			if (!object) {
				return new Response('文件不存在', {
					status: 404
				});
			}


			return new Response(object.body, {
				headers: {
					'Content-Type': 'application/octet-stream',
					'Content-Disposition':
						'attachment; filename="mail-shungleemain-setup.exe"',
					'Content-Length':
						object.size.toString(),
					'Cache-Control':
						'public, max-age=3600'
				}
			});
		}



		/**
		 * API 请求
		 * /api/xxx
		 * 转换为
		 * /xxx
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
		 * KV 对象存储
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
		 * Vue 前端资源
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
