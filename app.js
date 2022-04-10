const { App } = require('@slack/bolt');

// ボットトークンとソケットモードハンドラーを使ってアプリを初期化します
const app = new App({
  token: 'xoxb-2626196685191-3370029823426-V4dDAIAnj65iLDfjfhAL3hJV',
  signingSecret: 'b9af5de9d44762a15a697b4d51954824'
});

app.message('hello', async ({ message, say }) => {
  console.log('関数発火')
  console.log('message', message)
  // イベントがトリガーされたチャンネルに say() でメッセージを送信します
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  // アプリを起動します
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();