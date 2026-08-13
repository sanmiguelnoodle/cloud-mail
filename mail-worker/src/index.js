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
